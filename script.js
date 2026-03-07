// ===== script.js =====
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 收集所有答案
            const formData = new FormData(this);
            const answers = {};
            
            for (let [key, value] of formData.entries()) {
                answers[key] = value;
            }
            
            // 验证必填
            const requiredFields = ['gender', 'age', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 
                                   'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'overall'];
            const missing = requiredFields.filter(field => !answers[field]);
            
            if (missing.length > 0) {
                alert('请回答所有问题后再提交');
                return;
            }
            
            // ★★★ 保存数据到本地（可选）★★★
            // 如果你想在结果页显示刚才提交的数据，可以保存到 localStorage
            localStorage.setItem('lastSubmission', JSON.stringify(answers));
            
            // ★★★ 跳转到结果页（而不是腾讯文档）★★★
            alert('提交成功！正在跳转到结果页...');
            window.location.href = 'result.html';
        });
    }
}