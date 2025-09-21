# @flyin/shared-utils

一个支持 CJS 和 ESM 的简单工具库，可在 Node.js 和浏览器环境中使用。

## 安装

```bash
npm install @flyin/shared-utils
```

## 使用方式

### ESM (推荐)

```javascript
import { add, isEven, VERSION } from '@flyin/shared-utils';

const result = add(1, 2);
const even = isEven(4);
console.log(VERSION);
```

### ESM with default import

```javascript
import utils from '@flyin/shared-utils';

const result = utils.add(1, 2);
const even = utils.isEven(4);
console.log(utils.VERSION);
```

### CommonJS

```javascript
const { add, isEven, VERSION } = require('@flyin/shared-utils');

const result = add(1, 2);
const even = isEven(4);
console.log(VERSION);
```

### CommonJS with default import

```javascript
const utils = require('@flyin/shared-utils');

const result = utils.add(1, 2);
const even = utils.isEven(4);
console.log(utils.VERSION);
```

## API

### 常量

- `VERSION`: 包版本号
- `PI`: 圆周率常量

### 类型

- `UserInfo`: 用户信息类型

### 函数

#### `add(a: number, b: number): number`

计算两个数的和。

#### `isEven(num: number): boolean`

判断一个数是否为偶数。

#### `toUpperCase(str: string): string`

将字符串转换为大写。

## 目录结构

```
.
├── src/              # 源代码
├── tests/            # 测试文件
├── dist/             # 构建产物
├── package.json      # 包配置文件
├── tsconfig.json     # TypeScript 配置
├── rollup.config.js  # Rollup 构建配置
├── jest.config.js    # Jest 测试配置
└── README.md         # 使用文档
```

## 构建

```bash
# 清理旧的构建产物
npm run clean

# 构建项目
npm run build
```

## 测试

```bash
# 运行测试
npm test

# 监听模式运行测试
npm run test:watch

# 生成测试覆盖率报告
npm run test:coverage
```

## License

MIT