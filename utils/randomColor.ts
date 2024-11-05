

export const randomColor = () => {
    const colors = ['#F9EFCB', '#D5EEF6', '#E3EDFB', '#FBE3E3'];
      return colors[Math.floor(Math.random() * colors.length)];
  }