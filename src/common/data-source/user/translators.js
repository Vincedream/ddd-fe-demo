export function userTranslator({
    userId,
    email,
    userName,
    tel,
    userType,
    vip,
    vipValidityDate,
    avatar
}) {
    return {
        id: userId,
        email,
        name: userName,
        phoneNumber: tel,
        type: userType,
        isVip: vip,
        vipValidityDate: vipValidityDate,
        avatarUrl: avatar
    }
}