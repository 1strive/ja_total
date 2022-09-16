/*
 * @Author: JA
 * @Date: 2022-09-16 01:42:23
 * @LastEditTime: 2022-09-16 01:42:48
 * @LastEditors: JA
 */
// 首先必须是以http(s)开头并且可以不包含协议头部信息
// 主机名可以使用"-"符号，所以两种情况都要判断，包含"-"或不包含"-"
// 顶级域名很多，直接判断"."之后是否为字母即可
// 最后判断端口、路径和哈希，这些参数可有可无
const _isUrl = url => {
    return /^((http|https):\/\/)?(([A-Za-z0-9]+-[A-Za-z0-9]+|[A-Za-z0-9]+)\.)+([A-Za-z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(url)
}