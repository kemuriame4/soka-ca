# Here's the main project folder for SOKA.CA

## CHANGE
add files: [package.json](package.json), [vite.config.js](vite.config.js), [tailwind.config.js](tailwind.config.js), [postcss.config.js](postcss.config.js)

add files: [tailwind.css](src/styles/tailwind.css)

add lines to file: [theme.liquid](layout/theme.liquid#L353)
```js
  {%  comment  %} add export css files {% endcomment %}
  {{ 'app.css' | asset_url | stylesheet_tag }}
```

add lines to file: [theme.liquid](layout/theme.liquid#L435)
```js
  {% comment %} add export js files
  {{ 'app.js' |  asset_url | script_tag }} {% endcomment %}
```

## START
### USE DOCKER
1. Add a new docker by [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json)
2. upgrade the image core
```bash
apt update
apt upgrade
```
2. download the devtools ([**nodejs**](https://nodejs.org/en/download), [**bun**](http://bun.sh), or someone you use commonly)
### RUN the ENV
```bash
# init the dev env
npm install

# build the resources
npm run build

# run the vite watch
npm run watch
# run the shopify dev mode in another terminal
npm run shopify
```

### **Then, take your *development* !**

## ERROR
### Network speed
change linux apt sources [/etc/apt/sources.list]() to tsinghua
```bash
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble-backports main restricted universe multiverse

# 以下安全更新软件源包含了官方源与镜像站配置，如有需要可自行修改注释切换
deb http://security.ubuntu.com/ubuntu/ noble-security main restricted universe multiverse
# deb-src http://security.ubuntu.com/ubuntu/ noble-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble-proposed main restricted universe multiverse
# # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ noble-proposed main restricted universe multiverse
```
### Executable not found in $PATH: "xdg-open"

run the code below
```bash
# install web browser utils
apt install xdg-utils
# change the BROWSER path to the *local* browser, like chrome below
export BROWSER=/mnt/c/PROGRA~1/Google/Chrome/Application/chrome.exe
```