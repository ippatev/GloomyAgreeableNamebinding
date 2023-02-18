const symbol = (state) => {
  switch (state) {
    case "initial":
    case "active":
      return 'color.cyan(S_STEP_ACTIVE)';
    case "cancel":
      return 'color.red(S_STEP_CANCEL)';
    case "error":
      return 'color.yellow(S_STEP_ERROR)';
    case "submit":
      return 'color.green(S_STEP_SUBMIT)';
  }
};

const res = symbol('error')
console.log(res)