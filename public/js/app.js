document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('jsoneditor');
    const formatBtn = document.getElementById('format');
    const clearBtn = document.getElementById('clear');
    
    const options = {
        mode: 'code',
        modes: ['code', 'tree', 'form', 'text', 'view'],
        onError: function(err) {
            alert('JSON错误: ' + err.toString());
        }
    };
    
    const editor = new JSONEditor(container, options);
    
    // 设置初始JSON
    editor.set({
        "示例": "JSON数据",
        "状态": "已格式化",
        "功能": ["解析", "格式化", "验证"],
        "时间戳": new Date().toISOString()
    });
    
    formatBtn.addEventListener('click', function() {
        try {
            const json = editor.get();
            editor.set(json); // 重新设置以格式化
        } catch (e) {
            alert('格式化失败: ' + e.toString());
        }
    });
    
    clearBtn.addEventListener('click', function() {
        editor.set({});
    });
});
