$(function() {
    $('button').click(function() {
        const value = $(this).text();
        const current = $('#display').text();

        if (value === 'AC') {
            $('#display').text('0');
            return;
        }

        if (value === '=') {
            try {
                const result = eval(current);
                $('#display').text(result);
            } catch {
            $('#display').text('Error');
            }
            return;
        }   

        if (value === '.') {
            const last = current.slice(-1);
            if (['+', '-', '*', '/'].includes(last)) return;

            const parts = current.split(/[+\-\*\/]/);
            const lastNumber = parts[parts.length - 1];
            if (lastNumber.includes('.')) return;

            if (current === '0') {
                $('#display').text('0.');
            } else {
                $('#display').text(current + value);
            }
            return;
        }

        if (['+', '-', '*', '/'].includes(value)) {
            const last = current.slice(-1);
            if (['+', '-', '*', '/'].includes(last) || last === '.') return;
            $('#display').text(current + value);
            return;
        }

        if (current === '0') {
            $('#display').text(value);
        } else {
        $('#display').text(current + value);
        }
    });
});