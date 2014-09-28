[<FunScript.JS>]
module Page
 
open FunScript
open FunScript.TypeScript
 
open System
open System.IO
 
 
let jQuery(selector : string) = Globals.Dollar.Invoke selector
let (?) jq name = jq("#" + name)
 
 
let getBarRect totalHeight x max value = 
    let pixelValue = float totalHeight / (float max * 2.)
    let height = abs value * pixelValue
    if value > 0. then (x, totalHeight / 2. - height, 15.0, height)
                  else (x, totalHeight / 2., 15.0, height)
 
let getColor (ctx:CanvasRenderingContext2D) value = 
                                                let gradient =ctx.createLinearGradient(0.,0.,0.,300.);
                                                if value < 0. then gradient.addColorStop(1.,"red")
                                                                   gradient.addColorStop(0.,"white");
                                                              else
                                                                   gradient.addColorStop(1.,"white");
                                                                   gradient.addColorStop(0.,"green")
                                                gradient
 
 
let chart(values) =
        let chart_height = 300.
        let max = values |> Array.map (fun x-> abs x) |> Array.max
 
        let canvas = jQuery?canvas.[0] :?> HTMLCanvasElement
        let ctx = canvas.getContext_2d()
        ctx.clearRect(0.0, 0.0, canvas.width, canvas.height)
 
        values |> Array.iteri( fun i x-> ctx.fillStyle <- getColor ctx x
                                         let posX = float i * 16.0
                                         match getBarRect chart_height posX max x with
                                         | xp, yp, wp, hp -> ctx.fillRect (xp, yp, wp, hp);
                            ) |> ignore
 
 
let main() = 
  let getValues() = let range = jQuery?rangeValues._val() :?> int
                    Array.init range (fun _ -> ( Globals.Math.random() * 20. ) - 10.)
 
  jQuery?rangeValues.change(fun _ -> 
                                    let values = getValues()
                                    chart(values) :> obj
                            ) |> ignore
  chart(getValues()) :> obj
        
 
 
let js = Compiler.compileWithoutReturn <@ main() @>
 
File.WriteAllText(@"<YOUR PROJECT PATH HERE>\FunScript.js",js) |> ignore
Console.WriteLine("JS File generated")
Console.ReadLine() |> ignore
