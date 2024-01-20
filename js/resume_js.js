var originalColor = document.getElementById('resume-container').style.backgroundColor;

        document.getElementById('applyBtn').addEventListener('click', function() {
            var selectedColor = document.getElementById('color').value;
            document.getElementById('resume-container').style.backgroundColor = selectedColor;
            document.getElementById('revertBtn').style.display = 'inline-block';
        });

        document.getElementById('revertBtn').addEventListener('click', function() {
            document.getElementById('resume-container').style.backgroundColor = originalColor;
            document.getElementById('revertBtn').style.display = 'none';
        });