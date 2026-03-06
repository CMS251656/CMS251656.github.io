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
            
            // 添加时间戳
            answers.timestamp = new Date().toISOString();
            
            // ★★★ 已替换为你的腾讯文档收集表链接 ★★★
            const webhook = 'https://docs.qq.com/form/page/DY3ppeFpNeG1rT1dV';
            
            // 发送到腾讯文档
            fetch(webhook, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(answers)
            })
            .then(response => {
                if (response.ok) {
                    alert('提交成功！感谢您的参与。');
                    window.location.href = 'result.html';
                } else {
                    alert('提交失败，请稍后重试');
                }
            })
            .catch(error => {
                alert('提交失败，请检查网络后重试');
                console.error('Error:', error);
            });
        });
    }
});