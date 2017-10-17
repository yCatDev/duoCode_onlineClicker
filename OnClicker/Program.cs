using System;
using static System.Console;
using DuoCode.Dom;
using static DuoCode.Dom.Global; // uncomment to use C# 6.0 'using static' syntax


namespace HelloDuoCode
{
    
    

    static class Program
    {
        static string[] MaterialColors = { "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#009688", "#4CAF50", "#CDDC39", "#FFC107", "#FFEB3B", "#FF5722", "#FF9800","" };
        static HTMLCanvasElement canvas = document.createElement<HTMLCanvasElement>("canvas");
        static HTMLDivElement canvas_div = document.createElement<HTMLDivElement>("canvas_div");
        static CanvasRenderingContext2D ctx = canvas.getContext("2d");
        static CanvasRenderingContext2D text = canvas.getContext("2d");
        static Random rnd;
        static int newX, newY, score = 0;

        static void Run() // HTML body.onload event entry point, see index.html
        {
            rnd = new Random();
            canvas_div.appendChild(canvas);
            canvas.width = 640;
            canvas.height = 480;
            canvas_div.style.width = document.body.clientWidth.ToString();
            canvas.style.marginLeft = "25%";

            //canvas_div.style.display = "flex";
            //canvas_div.style.justifyContent = "center";
            //canvas_div.style.alignItems = "center";
            canvas.style.backgroundColor = "#9E9E9E";
            document.body.appendChild(canvas_div); 
            Draw(30, 30);
            
                 GameLoop();
                 
             
        }

        static void GameLoop()
        {
            canvas.addEventListener("click", MouseBehavior);            
            GameLoop();
        }

        static dynamic MouseBehavior(MouseEvent e)
        {

            var x = e.x - (34+(document.body.clientWidth*25)/100);
            var y = e.y - 138;
            WriteLine("Mouse x, y: " + x + ", " + y + " NewX,Y: " + newX + ", " + newY);
            if (x<newX+40 && x>newX-40 && y < newY + 40 && y > newY - 40)
            {
                Draw(30, 30);
                score++;
            }
           
            
            return true;
        }

        static void Draw(int size_x, int size_y)
        {
            canvas.style.backgroundColor = MaterialColors[rnd.Next(0,MaterialColors.Length-1)];
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();

            newX = rnd.Next(20, 620);
            newY = rnd.Next(20, 460);
            
            ctx.rect(newX, newY, size_x, size_y);     
            ctx.fillStyle = "#F44336";
            ctx.fill();

            text.shadowColor = "#263238";
            text.shadowOffsetX = 5;
            text.shadowOffsetY = 5;
            text.shadowBlur = 5;
            text.fillStyle = "#00BCD4";
            text.strokeStyle = "#263238";            
            text.font = "bold 20px sans-serif";

            text.fillText("Score "+score.ToString(), 20, 50);
            ctx.closePath();
        }
       

        
    }
}
