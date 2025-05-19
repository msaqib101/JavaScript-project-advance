
  function checkCharacter() {
    const char = document.getElementById('charInput').value.toLowerCase();
    const result = document.getElementById('result');
    result.classList.remove('show-result');

    // Reset animation
    setTimeout(() => {
      if (char.length !== 1 || !/[a-z]/.test(char)) {
        result.innerHTML = `
          <div class="error">
            ⚠️ Please enter a valid single alphabet
          </div>
        `;
        result.classList.add('show-result', 'error');
        return;
      }

      const displayChar = char.toUpperCase();
      if ('aeiou'.includes(char)) {
        result.innerHTML = `
          <div class="character-display">${displayChar}</div>
          <div class="vowel">
            🎉 It's a Vowel!
          </div>
        `;
        result.classList.add('show-result', 'vowel');
      } else {
        result.innerHTML = `
          <div class="character-display">${displayChar}</div>
          <div class="consonant">
            🔍 It's a Consonant
          </div>
        `;
        result.classList.add('show-result', 'consonant');
      }
    }, 50);
  }

  // Add Enter key support
  document.getElementById('charInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkCharacter();
  });

