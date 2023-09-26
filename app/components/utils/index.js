export const getBg = (arg) => {
    switch (arg) {
      case 0:
        return 'bg0';
      case 1:
        return 'greenBackground';
      case 2:
        return 'purpleBackground';
      case 3:
        return 'yellowBackground';
      case 4:
        return 'bg4';
      default:
        return 'bg0';
    }
  };