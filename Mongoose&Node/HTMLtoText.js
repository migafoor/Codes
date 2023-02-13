


const HTMLPartToTextPart = (HTMLPart) => (
    HTMLPart
      .replace(/\n/ig, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style[^>]*>/ig, '')
      .replace(/<head[^>]*>[\s\S]*?<\/head[^>]*>/ig, '')
      .replace(/<script[^>]*>[\s\S]*?<\/script[^>]*>/ig, '')
      .replace(/<\/\s*(?:p|div)>/ig, '\n')
      .replace(/<br[^>]*\/?>/ig, '\n')
      .replace(/<[^>]*>/ig, '')
      .replace('&nbsp;', ' ')
      .replace(/[^\S\r\n][^\S\r\n]+/ig, ' ')
  );


    var myHTML= "<div><h1>Shubham mishra</h1>\n<p>That's what she said regarding</p></div>";

    var strippedHtml = myHTML.replace(/<[^>]+>/g, '');


    const text2 = document.getElementById('text').innerHTML
    const newText2 = text2
      .replace(/<script.*?<\/script>/g, '<br>')
      .replace(/<style.*?<\/style>/g, '<br>')
      .replace(/(<([^>]+)>)/ig, "<br>")
      .replace(/(?:\r\n|\r|\n)/g, '<br>')
      //.replace(/(?:\\r\\n|\\r|\\n)/g, '<br>')
    console.log(newText2)
