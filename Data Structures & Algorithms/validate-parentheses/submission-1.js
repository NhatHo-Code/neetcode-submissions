class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // Mẹo nhỏ: Bạn không cần chuyển chuỗi thành Array [...s]. 
        // Trong JS, bạn có thể duyệt trực tiếp s[i] luôn để tiết kiệm bộ nhớ nhé!
        const nArray = [];

        for (let i = 0; i < s.length; i++){
            // 1. NẾU LÀ NGOẶC MỞ -> Đẩy vào Stack
            if (s[i] === '{'){
                nArray.push(s[i]);
            }
            else if (s[i] === '['){
                nArray.push(s[i]);
            }
            else if (s[i] === '('){
                nArray.push(s[i]);
            }
            
            // 2. NẾU LÀ NGOẶC ĐÓNG -> Lấy phần tử cuối từ Stack ra để kiểm tra
            else if (s[i] === '}'){
                const topElement = nArray.pop(); // Lấy ngoặc mở gần nhất ra
                if (topElement !== '{') {        // Nếu không khớp cặp
                    return false;
                }
            }
            else if (s[i] === ']'){
                const topElement = nArray.pop();
                if (topElement !== '[') {
                    return false;
                }
            }
            else if (s[i] === ')'){
                const topElement = nArray.pop();
                if (topElement !== '(') {
                    return false;
                }
            }
        }

        // 3. KẾT THÚC VÒNG LẶP -> Stack phải trống rỗng mới là hợp lệ
        // (Nếu nArray còn sót ngoặc mở, length sẽ > 0 -> trả về false)
        if (nArray.length === 0) {
            return true;
        } else {
            return false;
        }
        // Hoặc viết ngắn gọn hơn: return nArray.length === 0;
    }
}