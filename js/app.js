$(()=>{
    $('#btnGetQuote').click(()=>{
        $.getJSON('https://api.chucknorris.io/jokes/random', (data)=>{
            if(data && data.value){
                $('#quote').text(data.value);
                getQuote();
            }
        })
    });

    var getQuote  = ()=>{
        var quote = document.getElementById("quote"),
        mySplitText = new SplitText(quote, {type:"words"}),
        tl = new TimelineMax(),
        numWords = mySplitText.words.length;
        TweenLite.set(quote, {transformPerspective:600, perspective:300, transformStyle:"preserve-3d", autoAlpha:1});
       
        for(var i = 0; i < numWords; i++){
        tl.from(mySplitText.words[i], 1.5, { opacity:0}, Math.random()*1.5);
        }
        tl.from(quote, tl.duration(), {rotationY:180,  ease:Power2.easeOut}, 0);

        for(var i = 0; i < numWords; i++){
        var z = randomNumber(-50,50)
        tl.to(mySplitText.words[i], 0.5, {z:z, opacity:rangeToPercent(z, -50, 50)}, "pulse");
        }
        tl.to(quote, 0.5, {rotationY:20}, "pulse");

        for(var i = 0; i < numWords; i++){
        var z = randomNumber(-100,100)
        tl.to(mySplitText.words[i], 0.5, {z:z, opacity:rangeToPercent(z, -100, 100)}, "pulse2");
        }
        tl.to(quote, 0.5, {rotationX:-35, rotationY:0}, "pulse2");

        tl.to(mySplitText.words, 0.5, {z:0, opacity:1}, "reset")
        tl.to(quote, 0.5, {rotationY:0, rotationX:0}, "reset");

        function randomNumber(min, max){
            return Math.floor(Math.random() * (1 + max - min) + min);
        }
            return ((number - min) / (max - min));
        }
        }
});

