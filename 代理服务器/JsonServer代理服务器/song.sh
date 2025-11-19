#!/bin/bash

# song.sh - JSON Server歌曲管理脚本
# 使用方法: ./song.sh [command] [parameters]

BASE_URL="http://localhost:3001/song"

# 完全避免echo兼容性问题，统一使用printf
cecho() {
    local color_code=""
    case "$1" in
        red) color_code='\033[0;31m' ;;
        green) color_code='\033[0;32m' ;;
        yellow) color_code='\033[1;33m' ;;
        blue) color_code='\033[0;34m' ;;
        *) color_code='' ;;
    esac
    shift
    printf "%b%s%b\n" "$color_code" "$*" '\033[0m'
}

# 帮助信息
show_help() {
    cecho blue "歌曲管理脚本使用说明:"
    echo "=========================="
    cecho green "查询操作:"
    echo "  ./song.sh list                   # 列出所有歌曲"
    echo "  ./song.sh get <id>              # 根据ID查询歌曲"
    echo "  ./song.sh search <keyword>      # 搜索歌曲（名称或歌手）"
    echo "  ./song.sh by-singer <singer>    # 按歌手查询"
    echo "  ./song.sh by-name <name>        # 按歌曲名查询"
    echo ""
    cecho green "添加操作:"
    echo "  ./song.sh add <name> <singer>   # 添加新歌曲"
    echo ""
    cecho green "修改操作:"
    echo "  ./song.sh update <id> <name> <singer>  # 完整修改歌曲"
    echo "  ./song.sh patch <id> <field> <value>   # 部分修改歌曲"
    echo ""
    cecho green "删除操作:"
    echo "  ./song.sh delete <id>           # 删除指定ID的歌曲"
    echo "  ./song.sh delete-by-singer <singer> # 删除指定歌手的歌曲"
    echo ""
    cecho green "其他操作:"
    echo "  ./song.sh help                  # 显示此帮助信息"
    echo "  ./song.sh status               # 检查服务状态"
    echo ""
    cecho yellow "示例:"
    echo "  ./song.sh add \"夜曲\" \"周杰伦\""
    echo "  ./song.sh search \"周杰伦\""
    echo "  ./song.sh update 1 \"干杯新版\" \"五月天\""
}

# 检查服务状态
check_status() {
    cecho blue "检查服务状态..."
    if curl -s -o /dev/null -w "%{http_code}" "$BASE_URL" | grep -q "200"; then
        cecho green "✓ 服务运行正常"
        return 0
    else
        cecho red "✗ 服务未运行或无法访问"
        return 1
    fi
}

# 格式化JSON输出
format_json() {
    if command -v jq &> /dev/null; then
        jq .
    else
        # 回退方案
        python3 -c "import json, sys; print(json.dumps(json.load(sys.stdin), ensure_ascii=False, indent=2))" 2>/dev/null || cat
    fi
}

# 列出所有歌曲
list_songs() {
    cecho blue "获取所有歌曲..."
    curl -s -X GET "$BASE_URL" | format_json
}

# 根据ID查询歌曲
get_song() {
    if [ -z "$1" ]; then
        cecho red "错误: 请提供歌曲ID"
        return 1
    fi
    cecho blue "查询歌曲 ID: $1"
    curl -s -X GET "$BASE_URL/$1" | format_json
}

# 搜索歌曲
search_songs() {
    if [ -z "$1" ]; then
        cecho red "错误: 请提供搜索关键词"
        return 1
    fi
    cecho blue "搜索关键词: $1"
    curl -s -G "$BASE_URL" --data-urlencode "q=$1" | format_json
}

# 按歌手查询
get_by_singer() {
    if [ -z "$1" ]; then
        cecho red "错误: 请提供歌手名称"
        return 1
    fi
    cecho blue "查询歌手: $1 的歌曲"
    curl -s -G "$BASE_URL" --data-urlencode "singer=$1" | format_json
}

# 按歌曲名查询
get_by_name() {
    if [ -z "$1" ]; then
        cecho red "错误: 请提供歌曲名称"
        return 1
    fi
    cecho blue "查询歌曲: $1"
    curl -s -G "$BASE_URL" --data-urlencode "name=$1" | format_json
}

# 添加新歌曲
add_song() {
    if [ -z "$1" ] || [ -z "$2" ]; then
        cecho red "错误: 请提供歌曲名称和歌手"
        echo "用法: ./song.sh add <歌曲名> <歌手>"
        return 1
    fi

    cecho blue "添加新歌曲: $1 - $2"
    response=$(curl -s -X POST "$BASE_URL" \
        -H "Content-Type: application/json" \
        -d "{\"name\":\"$1\", \"singer\":\"$2\"}")

    echo "$response" | format_json
    cecho green "✓ 歌曲添加成功"
}

# 完整修改歌曲
update_song() {
    if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ]; then
        cecho red "错误: 请提供歌曲ID、新名称和新歌手"
        echo "用法: ./song.sh update <id> <新歌曲名> <新歌手>"
        return 1
    fi

    cecho blue "修改歌曲 ID: $1 -> $2 - $3"
    response=$(curl -s -X PUT "$BASE_URL/$1" \
        -H "Content-Type: application/json" \
        -d "{\"id\":$1, \"name\":\"$2\", \"singer\":\"$3\"}")

    echo "$response" | format_json
    cecho green "✓ 歌曲修改成功"
}

# 部分修改歌曲
patch_song() {
    if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ]; then
        cecho red "错误: 请提供歌曲ID、字段名和字段值"
        echo "用法: ./song.sh patch <id> <字段名> <字段值>"
        return 1
    fi

    cecho blue "部分修改歌曲 ID: $1 ($2=$3)"
    response=$(curl -s -X PATCH "$BASE_URL/$1" \
        -H "Content-Type: application/json" \
        -d "{\"$2\":\"$3\"}")

    echo "$response" | format_json
    cecho green "✓ 歌曲部分修改成功"
}

# 删除歌曲
delete_song() {
    if [ -z "$1" ]; then
        cecho red "错误: 请提供要删除的歌曲ID"
        return 1
    fi

    cecho yellow "确定要删除歌曲 ID: $1 吗? (y/N)"
    read -r confirmation

    if [ "$confirmation" = "y" ] || [ "$confirmation" = "Y" ]; then
        curl -s -X DELETE "$BASE_URL/$1"
        cecho green "✓ 歌曲删除成功"
    else
        cecho blue "取消删除操作"
    fi
}

# 按歌手删除歌曲
delete_by_singer() {
    if [ -z "$1" ]; then
        cecho red "错误: 请提供要删除的歌手名称"
        return 1
    fi

    # 先查询匹配的歌曲ID
    ids=$(curl -s -G "$BASE_URL" --data-urlencode "singer=$1" | jq -r '.[].id')
    cecho yellow "确定要删除所有歌手为 '$1' 的歌曲吗（歌曲ID为 $ids ）? (y/N)"
    read -r confirmation

    if [ "$confirmation" = "y" ] || [ "$confirmation" = "Y" ]; then
        # 然后逐个删除
        echo "$ids" | while read id; do
            curl -X DELETE "$BASE_URL/$id"
        done
        cecho green "✓ 歌手 '$1' 的所有歌曲已删除"
    else
        cecho blue "取消删除操作"
    fi
}

# 主程序
main() {
    case "$1" in
        "list"|"l")
            list_songs
            ;;
        "get"|"g")
            get_song "$2"
            ;;
        "search"|"s")
            search_songs "$2"
            ;;
        "by-singer"|"bs")
            get_by_singer "$2"
            ;;
        "by-name"|"bn")
            get_by_name "$2"
            ;;
        "add"|"a")
            add_song "$2" "$3"
            ;;
        "update"|"u")
            update_song "$2" "$3" "$4"
            ;;
        "patch"|"p")
            patch_song "$2" "$3" "$4"
            ;;
        "delete"|"d")
            delete_song "$2"
            ;;
        "delete-by-singer"|"dbs")
            delete_by_singer "$2"
            ;;
        "status"|"st")
            check_status
            ;;
        "help"|"h"|"")
            show_help
            ;;
        *)
            cecho red "未知命令: $1"
            echo "使用 './song.sh help' 查看可用命令"
            ;;
    esac
}

# 检查依赖
check_dependencies() {
    if ! command -v curl &> /dev/null; then
        cecho red "错误: 需要安装 curl"
        exit 1
    fi

    if ! command -v jq &> /dev/null; then
        cecho yellow "警告: 未找到 jq，JSON输出将不会格式化"
        format_json() {
            cat
        }
    fi

    if ! command -v python3 &> /dev/null; then
        cecho yellow "警告: 未找到 python3，JSON输出将不会格式化"
        format_json() {
            cat
        }
    fi
}

# 脚本入口
check_dependencies

if [ $# -eq 0 ]; then
    show_help
else
    main "$@"
fi