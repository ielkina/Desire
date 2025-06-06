class Human
  constructor : (@name) ->

class Baby extends Human
  say   : (msg) -> alert "#{@name} говорит '#{msg}'"
  sayHi : -> @say('здравствуй!')

matt = new Baby("Матвей")
matt.sayHi()
