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
                return false;
            }
            
            // 保存数据到本地（可选）
            try {
                localStorage.setItem('lastSubmission', JSON.stringify(answers));
            } catch (e) {
                console.log('本地存储失败', e);
            }
            
            // 跳转到结果页
            alert('提交成功！正在跳转到结果页...');
            window.location.href = 'result.html';
            
            // 关键：返回 false 确保表单不会刷新
            return false;
        });
    }
});