const re = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;

export default phoneNumber => {
    const invalidPhoneNumber = re.test(phoneNumber)
    if (invalidPhoneNumber === false) {
        return "invalid_message"
    }

    return;
};
