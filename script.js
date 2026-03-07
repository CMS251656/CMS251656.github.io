// ===== script.js =====
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 验证必填
            const formData = new FormData(this);
            const answers = {};
            
            for (let [key, value] of formData.entries()) {
                answers[key] = value;
            }
            
            const requiredFields = ['gender', 'age', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 
                                   'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'overall'];
            const missing = requiredFields.filter(field => !answers[field]);
            
            if (missing.length > 0) {
                alert('请回答所有问题后再提交');
                return;
            }
            
            // ★★★ 跳转到腾讯文档填写页面（你的正确链接）★★★
            alert('即将跳转到腾讯文档填写问卷，请放心填写，数据会自动保存。');
            window.location.href = 'https://docs.qq.com/form/page/DY3ppeFpNeG1rT1dV';
            
            return false;
        });
    }
});