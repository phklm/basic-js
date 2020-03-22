module.exports = function repeater(str, options) {
  let result = [];
    if (str == null) str = `${str}`
    if (options.addition !== null) {
      addition = options.addition;
    }
    else {
      addition = `${options.addition}`
    }
    separator = options.separator || '+'
    additionSeparator = options.additionSeparator || '|'
    repeatTimes = options.repeatTimes || 1
    additionRepeatTimes = options.additionRepeatTimes || 1
    for (let i = 0; i < repeatTimes; i++) {
      result.push(str)
        for (let i = 0; i < additionRepeatTimes; i++) {
          result.push(addition)
          if (i != additionRepeatTimes - 1) result.push(additionSeparator)
        }
        if (i != repeatTimes - 1) result.push(separator)
    }
    return result.join('')
};
  