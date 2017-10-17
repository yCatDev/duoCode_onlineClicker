/*!
* HelloDuoCode, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
*
* Generated by DuoCode Compiler 3.0.1654.0 [Trial]
*/
(function HelloDuoCode() {
"use strict";
var $asm = {
    fullName: "HelloDuoCode",
    anonymousTypes: [],
    types: [],
    getAttrs: function() { return [new System.Reflection.AssemblyTitleAttribute.ctor("HelloDuoCode"), new System.Reflection.AssemblyDescriptionAttribute.ctor(""), new System.Reflection.AssemblyConfigurationAttribute.ctor(""), new System.Reflection.AssemblyCompanyAttribute.ctor(""), new System.Reflection.AssemblyProductAttribute.ctor("HelloDuoCode"), new System.Reflection.AssemblyCopyrightAttribute.ctor("Copyright \xA9  2015"), new System.Reflection.AssemblyTrademarkAttribute.ctor(""), new System.Reflection.AssemblyCultureAttribute.ctor(""), new System.Reflection.AssemblyVersionAttribute.ctor("1.0.0.0"), new System.Reflection.AssemblyFileVersionAttribute.ctor("1.0.0.0"), new DuoCode.Runtime.CompilerAttribute.ctor("3.0.1654.0")]; }
};
var $g = (typeof(global) !== "undefined" ? global : (typeof(window) !== "undefined" ? window : self));
var HelloDuoCode = $g.HelloDuoCode = $g.HelloDuoCode || {};
var $d = DuoCode.Runtime;
$d.$assemblies["HelloDuoCode"] = $asm;
HelloDuoCode.Program = $d.declare("HelloDuoCode.Program", 0, $asm);
$d.define(HelloDuoCode.Program, null, function($t, $p) {
    $t.cctor = function() {
        $t.MaterialColors = $d.array(String, ["#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#009688", 
            "#4CAF50", "#CDDC39", "#FFC107", "#FFEB3B", "#FF5722", "#FF9800", ""]);
        $t.canvas = document.createElement("canvas");
        $t.canvas_div = document.createElement("canvas_div");
        $t.ctx = $t().canvas.getContext("2d");
        $t.text = $t().canvas.getContext("2d");
        $t.rnd = null;
        $t.newX = 0;
        $t.newY = 0;
        $t.score = 0;
    };
    $t.Run = function Program_Run() { // HTML body.onload event entry point, see index.html
        $t().rnd = new System.Random.ctor();
        $t().canvas_div.appendChild($t().canvas);
        $t().canvas.width = 640;
        $t().canvas.height = 480;
        $t().canvas_div.style.width = document.body.clientWidth.toString();
        $t().canvas.style.marginLeft = "25%";

        //canvas_div.style.display = "flex";
        //canvas_div.style.justifyContent = "center";
        //canvas_div.style.alignItems = "center";
        $t().canvas.style.backgroundColor = "#9E9E9E";
        document.body.appendChild($t().canvas_div);
        $t.Draw(30, 30);

        $t.GameLoop();


    };
    $t.GameLoop = function Program_GameLoop() {
        $t().canvas.addEventListener("click", $d.delegate($t().MouseBehavior));
        $t.GameLoop();
    };
    $t.MouseBehavior = function Program_MouseBehavior(e) {

        var x = e.x - (34 + (document.body.clientWidth * 25) / 100);
        var y = e.y - 138;
        System.Console.WriteLine$10("Mouse x, y: " + $d.toString(x) + ", " + $d.toString(y) + " NewX,Y: " + $d.toString($t().newX) + ", " + $d.toString($t().newY));
        if (x < $t().newX + 40 && x > $t().newX - 40 && y < $t().newY + 40 && y > $t().newY - 40) {
            $t.Draw(30, 30);
            $t().score++;
        }


        return true;
    };
    $t.Draw = function Program_Draw(size_x, size_y) {
        $t().canvas.style.backgroundColor = $t().MaterialColors[$t().rnd.Next$2(0, $t().MaterialColors.length - 1)];
        $t().ctx.clearRect(0, 0, $t().canvas.width, $t().canvas.height);
        $t().ctx.beginPath();

        $t().newX = $t().rnd.Next$2(20, 620);
        $t().newY = $t().rnd.Next$2(20, 460);

        $t().ctx.rect($t().newX, $t().newY, size_x, size_y);
        $t().ctx.fillStyle = "#F44336";
        $t().ctx.fill();

        $t().text.shadowColor = "#263238";
        $t().text.shadowOffsetX = 5;
        $t().text.shadowOffsetY = 5;
        $t().text.shadowBlur = 5;
        $t().text.fillStyle = "#00BCD4";
        $t().text.strokeStyle = "#263238";
        $t().text.font = "bold 20px sans-serif";

        $t().text.fillText("Score " + $t().score.toString(), 20, 50);
        $t().ctx.closePath();
    };
});
return $asm;
})();
//# sourceMappingURL=HelloDuoCode.js.map
