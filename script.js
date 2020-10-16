// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "PSAP Modified",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 763.71,
              "height": 230.52,
              "stroke": "#000000",
              "strokeWidth": 1,
              "fill": "black",
              "text": "In this task, you will be participating with 12 other players.\nThe other players will have a similar computer set-up \nand are also completing the task remotely.\n\nPress SPACE to continue\n",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "30",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": "continue"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Introduction"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 788.77,
              "height": 191.2,
              "stroke": "#000000",
              "strokeWidth": 1,
              "fill": "black",
              "text": "When each session starts, the numbers \"1\", \"2\", and \"3\"\nwill appear on the screen, as well as a button press counter\nand the first letter of your opponent's name.\n\nPress SPACE to continue",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "30",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Computer Set-Up"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -25,
              "angle": 0,
              "width": 804.35,
              "height": 427.14,
              "stroke": "#000000",
              "strokeWidth": 1,
              "fill": "black",
              "text": "Pushing the \"1\" key on your keyboard will cause the\npress counter to start counting how often you press \"1\".\nPushing \"1\" 10 times will add 1 point to your total score\nif you are faster than your opponent.\n\nYou will receive feedback regarding whether you won or lost \nand the selection your opponent made during that trial and \nthen see the buttons and counter again, at which point \nyou can continue to press \"1\" or switch to \"2\" or \"3\".\n\nPress SPACE to continue.",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "30",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {
            "Slide4.PNG": "embedded\u002F94da2a146922fce8826a9b8956e859f42b3d2bdd0aa1abd7a44c13b6a41f658b.PNG"
          },
          "responses": {
            "keypress(Space)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instructions: 1"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 708.34,
              "height": 545.11,
              "stroke": "#000000",
              "strokeWidth": 1,
              "fill": "black",
              "text": "If you push “2” the press counter will again start \ncounting how often you push \"2\". \n\nAfter you push \"2\" 10 times 1 point will be subtracted \nfrom the other player's total score if you are faster.\n\nYou will again receive feedback about your outcome\nand your opponent's behavior and return to the\noriginal screen.\n\nIf you subtract points from the other player, \nthey will NOT be added to your score.\n\nPress SPACE to continue",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "30",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instructions: 2"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 688.73,
              "height": 191.2,
              "stroke": "#000000",
              "strokeWidth": 1,
              "fill": "black",
              "text": "If you press the \"3\" 10 times, your point counter will\nbe protected from point subtractions initiated by the \nother player for that round.\n\nPress SPACE to continue",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "30",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instructions: 3"
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 753.79,
              "height": 427.14,
              "stroke": "#000000",
              "strokeWidth": 1,
              "fill": "black",
              "text": "In some rounds of the game, a green dollar sign ($$) \nsymbol will appear on the screen in the top right\ncorner. This indicates that for this round, you can earn\n$1.00 in addition to SONA credit if you accrue more \ntotal points than your opponents at the end of the game.\n\nDuring these rounds you still have the option to steal any\nmoney that your opponent has accrued or to protect the\nmoney that you have earned up to that point.\n\nIf you are ready to begin, press the SPACE button",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "30",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Reward Instructions"
        }
      ]
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "opponent": "A",
          "oppResp": "selected \"2\" (steal)",
          "condition": "$$",
          "feedback": "You won!"
        },
        {
          "opponent": "B",
          "oppResp": "selected \"2\" (steal)",
          "condition": "",
          "feedback": "You lost!"
        },
        {
          "opponent": "C",
          "oppResp": "selected \"2\" (steal)",
          "condition": "$$",
          "feedback": "You lost!"
        },
        {
          "opponent": "D",
          "oppResp": "selected \"2\" (steal)",
          "condition": "$$",
          "feedback": "You won!"
        },
        {
          "opponent": "E",
          "oppResp": "selected \"1\" (earn)",
          "condition": "",
          "feedback": "You lost!"
        },
        {
          "opponent": "F",
          "oppResp": "selected \"1\" (earn)",
          "condition": "$$",
          "feedback": "You lost!"
        },
        {
          "opponent": "G",
          "oppResp": "selected \"1\" (earn)",
          "condition": "",
          "feedback": "You lost!"
        },
        {
          "opponent": "K",
          "oppResp": "selected \"1\" (earn)",
          "condition": "$$",
          "feedback": "You won!"
        },
        {
          "opponent": "L",
          "oppResp": "selected \"3\" (protect)",
          "condition": "$$",
          "feedback": "You lost!"
        },
        {
          "opponent": "J",
          "oppResp": "selected \"3\" (protect)",
          "condition": "",
          "feedback": "You lost!"
        },
        {
          "opponent": "M",
          "oppResp": "selected \"3\" (protect)",
          "condition": "",
          "feedback": "You lost!"
        },
        {
          "opponent": "P",
          "oppResp": "selected \"3\" (protect)",
          "condition": "",
          "feedback": "You won!"
        }
      ],
      "sample": {
        "mode": "draw-replace",
        "n": "50"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Loop",
      "shuffleGroups": [
        [
          "condition"
        ],
        [
          "feedback"
        ]
      ],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {},
        "parameters": {},
        "messageHandlers": {},
        "title": "Trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 382.44,
                "height": 162,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Your opponent now is:\n\n\nWhat would you like to do?",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -188.19,
                "top": 75,
                "angle": 0,
                "width": 121.43,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -190,
                "top": 75,
                "angle": 0,
                "width": 99.01,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "1 = Earn",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -24.91,
                "top": 75,
                "angle": 0,
                "width": 122.78,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": 150.67,
                "top": 75,
                "angle": 0,
                "width": 149.61,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": 75,
                "angle": 0,
                "width": 103.35,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "2 = Steal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 75,
                "angle": 0,
                "width": 126.46,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "3 = Protect",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 352.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9",
                "text": " ${parameters.opponent}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 114,
                "top": -265,
                "angle": 0,
                "width": 552.16,
                "height": 54.24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#12864e",
                "text": "${parameters.condition}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "48",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -250,
                "top": 225,
                "angle": 0,
                "width": 257.92,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Button presses: 0 ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(1)": "earn",
              "keypress(2)": "steal",
              "keypress(3)": "protect"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.parameters.points = 0;

pointCounter = function(){
  if (this.response_action.keypress("1")){
    return points+1
     }
    else return points
     }
}
            },
            "title": "Stimulus"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 382.44,
                "height": 162,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Your opponent now is:\n\n\nWhat would you like to do?",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -188.19,
                "top": 75,
                "angle": 0,
                "width": 121.43,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -190,
                "top": 75,
                "angle": 0,
                "width": 99.01,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "1 = Earn",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -24.91,
                "top": 75,
                "angle": 0,
                "width": 122.78,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": 150.67,
                "top": 75,
                "angle": 0,
                "width": 149.61,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": 75,
                "angle": 0,
                "width": 103.35,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "2 = Steal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 75,
                "angle": 0,
                "width": 126.46,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "3 = Protect",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 352.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9",
                "text": " ${parameters.opponent}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 114,
                "top": -265,
                "angle": 0,
                "width": 552.16,
                "height": 54.24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#12864e",
                "text": "${parameters.condition}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "48",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -14,
                "top": 200,
                "angle": 0,
                "width": 257.92,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Button presses: 1 ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(1)": "steal",
              "keypress(2)": "earn",
              "keypress(3)": "protect"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.parameters.points = 0;

pointCounter = function(){
  if (this.response_action.keypress("1")){
    return points+1
     }
    else return points
     }
}
            },
            "title": "Stimulus"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 382.44,
                "height": 162,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Your opponent now is:\n\n\nWhat would you like to do?",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -188.19,
                "top": 75,
                "angle": 0,
                "width": 121.43,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -190,
                "top": 75,
                "angle": 0,
                "width": 99.01,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "1 = Earn",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -24.91,
                "top": 75,
                "angle": 0,
                "width": 122.78,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": 150.67,
                "top": 75,
                "angle": 0,
                "width": 149.61,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": 75,
                "angle": 0,
                "width": 103.35,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "2 = Steal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 75,
                "angle": 0,
                "width": 126.46,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "3 = Protect",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 352.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9",
                "text": " ${parameters.opponent}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 114,
                "top": -265,
                "angle": 0,
                "width": 552.16,
                "height": 54.24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#12864e",
                "text": "${parameters.condition}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "48",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -14,
                "top": 200,
                "angle": 0,
                "width": 257.92,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Button presses: 2 ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(1)": "steal",
              "keypress(2)": "earn",
              "keypress(3)": "protect"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.parameters.points = 0;

pointCounter = function(){
  if (this.response_action.keypress("1")){
    return points+1
     }
    else return points
     }
}
            },
            "title": "Stimulus"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 382.44,
                "height": 162,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Your opponent now is:\n\n\nWhat would you like to do?",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -188.19,
                "top": 75,
                "angle": 0,
                "width": 121.43,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -190,
                "top": 75,
                "angle": 0,
                "width": 99.01,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "1 = Earn",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -24.91,
                "top": 75,
                "angle": 0,
                "width": 122.78,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": 150.67,
                "top": 75,
                "angle": 0,
                "width": 149.61,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": 75,
                "angle": 0,
                "width": 103.35,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "2 = Steal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 75,
                "angle": 0,
                "width": 126.46,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "3 = Protect",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 352.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9",
                "text": " ${parameters.opponent}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 114,
                "top": -265,
                "angle": 0,
                "width": 552.16,
                "height": 54.24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#12864e",
                "text": "${parameters.condition}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "48",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -14,
                "top": 200,
                "angle": 0,
                "width": 257.92,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Button presses: 3 ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(1)": "steal",
              "keypress(2)": "earn",
              "keypress(3)": "protect"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.parameters.points = 0;

pointCounter = function(){
  if (this.response_action.keypress("1")){
    return points+1
     }
    else return points
     }
}
            },
            "title": "Stimulus"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 382.44,
                "height": 162,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Your opponent now is:\n\n\nWhat would you like to do?",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -188.19,
                "top": 75,
                "angle": 0,
                "width": 121.43,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -190,
                "top": 75,
                "angle": 0,
                "width": 99.01,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "1 = Earn",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -24.91,
                "top": 75,
                "angle": 0,
                "width": 122.78,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": 150.67,
                "top": 75,
                "angle": 0,
                "width": 149.61,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": 75,
                "angle": 0,
                "width": 103.35,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "2 = Steal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 75,
                "angle": 0,
                "width": 126.46,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "3 = Protect",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 352.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9",
                "text": " ${parameters.opponent}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 114,
                "top": -265,
                "angle": 0,
                "width": 552.16,
                "height": 54.24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#12864e",
                "text": "${parameters.condition}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "48",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -14,
                "top": 200,
                "angle": 0,
                "width": 257.92,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Button presses: 4 ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(1)": "steal",
              "keypress(2)": "earn",
              "keypress(3)": "protect"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.parameters.points = 0;

pointCounter = function(){
  if (this.response_action.keypress("1")){
    return points+1
     }
    else return points
     }
}
            },
            "title": "Stimulus"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 382.44,
                "height": 162,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Your opponent now is:\n\n\nWhat would you like to do?",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -188.19,
                "top": 75,
                "angle": 0,
                "width": 121.43,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -190,
                "top": 75,
                "angle": 0,
                "width": 99.01,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "1 = Earn",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -24.91,
                "top": 75,
                "angle": 0,
                "width": 122.78,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": 150.67,
                "top": 75,
                "angle": 0,
                "width": 149.61,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": 75,
                "angle": 0,
                "width": 103.35,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "2 = Steal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 75,
                "angle": 0,
                "width": 126.46,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "3 = Protect",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 352.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9",
                "text": " ${parameters.opponent}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 114,
                "top": -265,
                "angle": 0,
                "width": 552.16,
                "height": 54.24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#12864e",
                "text": "${parameters.condition}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "48",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -14,
                "top": 200,
                "angle": 0,
                "width": 257.92,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Button presses: 5 ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(1)": "steal",
              "keypress(2)": "earn",
              "keypress(3)": "protect"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.parameters.points = 0;

pointCounter = function(){
  if (this.response_action.keypress("1")){
    return points+1
     }
    else return points
     }
}
            },
            "title": "Stimulus"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 382.44,
                "height": 162,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Your opponent now is:\n\n\nWhat would you like to do?",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -188.19,
                "top": 75,
                "angle": 0,
                "width": 121.43,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -190,
                "top": 75,
                "angle": 0,
                "width": 99.01,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "1 = Earn",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -24.91,
                "top": 75,
                "angle": 0,
                "width": 122.78,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": 150.67,
                "top": 75,
                "angle": 0,
                "width": 149.61,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": 75,
                "angle": 0,
                "width": 103.35,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "2 = Steal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 75,
                "angle": 0,
                "width": 126.46,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "3 = Protect",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 352.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9",
                "text": " ${parameters.opponent}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 114,
                "top": -265,
                "angle": 0,
                "width": 552.16,
                "height": 54.24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#12864e",
                "text": "${parameters.condition}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "48",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -14,
                "top": 200,
                "angle": 0,
                "width": 257.92,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Button presses: 6 ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(1)": "steal",
              "keypress(2)": "earn",
              "keypress(3)": "protect"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.parameters.points = 0;

pointCounter = function(){
  if (this.response_action.keypress("1")){
    return points+1
     }
    else return points
     }
}
            },
            "title": "Stimulus"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 382.44,
                "height": 162,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Your opponent now is:\n\n\nWhat would you like to do?",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -188.19,
                "top": 75,
                "angle": 0,
                "width": 121.43,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -190,
                "top": 75,
                "angle": 0,
                "width": 99.01,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "1 = Earn",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -24.91,
                "top": 75,
                "angle": 0,
                "width": 122.78,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": 150.67,
                "top": 75,
                "angle": 0,
                "width": 149.61,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": 75,
                "angle": 0,
                "width": 103.35,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "2 = Steal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 75,
                "angle": 0,
                "width": 126.46,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "3 = Protect",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 352.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9",
                "text": " ${parameters.opponent}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 114,
                "top": -265,
                "angle": 0,
                "width": 552.16,
                "height": 54.24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#12864e",
                "text": "${parameters.condition}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "48",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -14,
                "top": 200,
                "angle": 0,
                "width": 257.92,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Button presses: 7 ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(1)": "steal",
              "keypress(2)": "earn",
              "keypress(3)": "protect"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.parameters.points = 0;

pointCounter = function(){
  if (this.response_action.keypress("1")){
    return points+1
     }
    else return points
     }
}
            },
            "title": "Stimulus"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 382.44,
                "height": 162,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Your opponent now is:\n\n\nWhat would you like to do?",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -188.19,
                "top": 75,
                "angle": 0,
                "width": 121.43,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -190,
                "top": 75,
                "angle": 0,
                "width": 99.01,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "1 = Earn",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -24.91,
                "top": 75,
                "angle": 0,
                "width": 122.78,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": 150.67,
                "top": 75,
                "angle": 0,
                "width": 149.61,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": 75,
                "angle": 0,
                "width": 103.35,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "2 = Steal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 75,
                "angle": 0,
                "width": 126.46,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "3 = Protect",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 352.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9",
                "text": " ${parameters.opponent}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 114,
                "top": -265,
                "angle": 0,
                "width": 552.16,
                "height": 54.24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#12864e",
                "text": "${parameters.condition}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "48",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -14,
                "top": 200,
                "angle": 0,
                "width": 257.92,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Button presses: 8 ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(1)": "steal",
              "keypress(2)": "earn",
              "keypress(3)": "protect"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.parameters.points = 0;

pointCounter = function(){
  if (this.response_action.keypress("1")){
    return points+1
     }
    else return points
     }
}
            },
            "title": "Stimulus"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 382.44,
                "height": 162,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "Your opponent now is:\n\n\nWhat would you like to do?",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -188.19,
                "top": 75,
                "angle": 0,
                "width": 121.43,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -190,
                "top": 75,
                "angle": 0,
                "width": 99.01,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "1 = Earn",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": -24.91,
                "top": 75,
                "angle": 0,
                "width": 122.78,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "rect",
                "left": 150.67,
                "top": 75,
                "angle": 0,
                "width": 149.61,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": 75,
                "angle": 0,
                "width": 103.35,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "2 = Steal",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 75,
                "angle": 0,
                "width": 126.46,
                "height": 29.38,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "3 = Protect",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "26",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -25,
                "top": -100,
                "angle": 0,
                "width": 352.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#0070d9",
                "text": " ${parameters.opponent}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 114,
                "top": -265,
                "angle": 0,
                "width": 552.16,
                "height": 54.24,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#12864e",
                "text": "${parameters.condition}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "48",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -14,
                "top": 200,
                "angle": 0,
                "width": 257.92,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#fcbb0a",
                "text": "Button presses: 9 ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "keypress(1)": "steal",
              "keypress(2)": "earn",
              "keypress(3)": "protect"
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
this.options.parameters.points = 0;

pointCounter = function(){
  if (this.response_action.keypress("1")){
    return points+1
     }
    else return points
     }
}
            },
            "title": "Stimulus"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 50,
                "angle": 0,
                "width": 690.27,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${parameters.opponent} ${parameters.oppResp}",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "aoi",
                "left": -500,
                "top": 410,
                "angle": 0,
                "width": 50,
                "height": 50,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "rgba(0, 0, 0, 0.2)",
                "label": ""
              },
              {
                "type": "i-text",
                "left": 0,
                "top": -50,
                "angle": 0,
                "width": 339.78,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#000000",
                "text": "${parameters.feedback}",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Feedback",
            "timeout": "2500"
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()