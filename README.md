# typewriter

typewriter variables

# window.typeWriter = function (where, txt, speed, timeout)
 * where = element where to write a given text.
txt = text for writing out innerHTML or innerTEXT.
  * "txt" can be defined as => data-alttext="Son, a beautiful small town, where u for sure can meet som interessting people." 
speed = how fast the text will be written.
  * "speed" can be defined as => data-textspeed="25"
timeout = when to start writing text.
  * "timeout" can be defined as => data-textspeedtimeout="250"

# other typewrier variables
exsample `"<div id="feedbacks"><p class="card-text typewriter invisible" data-alttext="Son, a beautiful small town, where u for sure can meet som interessting people." data-textspeed="25" data-textspeedtimeout="250" data-texthuman="true" data-textafter="_" data-textclassremove="invisible" data-texttodo="feedbacks:height"></p></div>"`

 * data-texthuman="true" => means the speed in which the text is written is different each time a letter was written.
 * data-textafter="_" => means charaters to insert after each  letter was written, it gets removed after the last letter was written.
 * data-textclassremove="invisible" => means class to remove from either this or the closest parent to remove. does not support multiple values. but u can add support for it. it's up to u.
 * data-texttodo="feedbacks:height" => means element with id of "feedbacks" set height to this element. it's to prevent layout shift 
