<template>
  <section class="header-bottom d-flex align-center justify-center">
      <v-row>
        <v-col cols="12" md="5" class="header-bottom-left">
          <section>
            <h5 class="header-bottom-title text-center text-md-left">ShydlovichTeam</h5>
            <p class="header-bottom-text text-center text-md-left mb-8">Программные решения, которые действительно нужны бизнесу</p>
          </section>
        </v-col>
        <v-col cols="12" md="5" class="offset-md-1">
          <div class="header-bottom-wrap">
            <span class="header-bottom-absolute ">•••</span>
            <h4 class="pt-1">bash</h4>
            <v-row>
              <v-col cols="12" class="pt-6 pb-6 mr-4">
                <pre id="typewriter">
                  <span class="var-highlight">var</span> object = {
                         name: <span class="string-highlight">'ShydlovichTeam'</span>,
                         type: <span class="string-highlight">'Object'</span>,
                         location: <span class="string-highlight">'shydlovich@gmail.com'</span>,
                         properties:[
                                     <span class="string-highlight">'Javascript'</span>,
                                     <span class="string-highlight">'Vue.js'</span>,
                                     <span class="string-highlight">'Svelte'</span>,
                                     <span class="string-highlight">'HTML'</span>,
                                     <span class="string-highlight">'CSS'</span>
                                    ];
                };</pre>
<!--                <p style="white-space: pre-wrap" class="out text-left"></p>-->
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
  </section>
</template>

<script>
export default {
  name: "First",
  data() {
    return {
      item: [
        'hello world\n',
        'hello world uuuu nnnnn\n',
      ],
    }
  },
  methods: {
    // setupTypewriter(t) {
    //   var HTML = t.innerHTML;
    //
    //   t.innerHTML = "";
    //
    //   var cursorPosition = 0,
    //       tag = "",
    //       writingTag = false,
    //       tagOpen = false,
    //       typeSpeed = 100,
    //       tempTypeSpeed = 0;
    //
    //   var type = function() {
    //
    //     if (writingTag === true) {
    //       tag += HTML[cursorPosition];
    //     }
    //
    //     if (HTML[cursorPosition] === "<") {
    //       tempTypeSpeed = 0;
    //       if (tagOpen) {
    //         tagOpen = false;
    //         writingTag = true;
    //       } else {
    //         tag = "";
    //         tagOpen = true;
    //         writingTag = true;
    //         tag += HTML[cursorPosition];
    //       }
    //     }
    //     if (!writingTag && tagOpen) {
    //       tag.innerHTML += HTML[cursorPosition];
    //     }
    //     if (!writingTag && !tagOpen) {
    //       if (HTML[cursorPosition] === " ") {
    //         tempTypeSpeed = 0;
    //       }
    //       else {
    //         tempTypeSpeed = (Math.random() * typeSpeed) + 50;
    //       }
    //       t.innerHTML += HTML[cursorPosition];
    //     }
    //     if (writingTag === true && HTML[cursorPosition] === ">") {
    //       tempTypeSpeed = (Math.random() * typeSpeed) + 50;
    //       writingTag = false;
    //       if (tagOpen) {
    //         var newSpan = document.createElement("span");
    //         t.appendChild(newSpan);
    //         newSpan.innerHTML = tag;
    //         tag = newSpan.firstChild;
    //       }
    //     }
    //
    //     cursorPosition += 1;
    //     if (cursorPosition < HTML.length - 1) {
    //       setTimeout(type, tempTypeSpeed);
    //     }
    //
    //   };
    //
    //   return {
    //     type: type
    //   };
    // }
    // typeText() {
    //   let line = 0;
    //   let count = 0;
    //   let out = '';
    //   let htmlOut = document.querySelector('.out')
    //
    //   setTimeout(() => {
    //     function typeLine() {
    //       let interval = setTimeout(() => {
    //         console.log(111111111, this.item)
    //         console.log(1188881, htmlOut)
    //         out += this.item[line][count];
    //         htmlOut.innerHTML = out + '|';
    //         console.log(6666661, htmlOut)
    //         count++;
    //         if (count >= this.item[line].length) {
    //           count = 0;
    //           line++;
    //           if (line == this.item.length) {
    //             clearTimeout(interval);
    //             return true;
    //           }
    //         }
    //         typeLine.call(this)
    //       }, 100);
    //
    //     }
    //
    //     typeLine.call(this)
    //   }, 3200)
    // }
  },
  mounted () {
    // this.typewriter.type();
    // this.typeText()
  },
}
</script>

<style lang="sass">
.var-highlight
  color: #C0AD60
.string-highlight
  color: rgba(253, 149, 90, 0.8)

#typewriter
  font-size: 14px
  margin: 0
  font-family: 'Open Sans', sans-serif!important
  text-align: left
  &:after
    content: "|"
    animation: blink 500ms linear infinite alternate

@-webkit-keyframes blink
  0%
    opacity: 0
  100%
    opacity: 1

@-moz-keyframes blink
  0%
    opacity: 0
  100%
    opacity: 1

@keyframes blink
  0%
    opacity: 0
  100%
    opacity: 1
</style>
