module.exports = {
    // 用户密码加密字符串
    PWD_ENCODE_STR: "pawn_user_encode_str",
    // token 加密字符串,
    TOKEN_ENCODE_STR: "pawn_token_encode_str",
    // 白名单url （不用进行token验证）
    WHILE_URLS: ["/api/user/login", "/api/user"]
}