var TupleDouble_Double_Double_Double, Page__op_Dynamic$JQuery_JQuery_, Page__main$, Page__jQuery$, Page__getColor$, Page__getBarRect$Double_Double, Page__chart$, MathJS__Abs$, LanguagePrimitives__UnboxGeneric$Int32_Int32, LanguagePrimitives__UnboxGeneric$HTMLCanvasElement_HTMLCanvasElement_, Array__ZeroCreate$Double_Double, Array__Reduce$Double_Double, Array__Max$Double_Double, Array__MapIndexed$Double__Double_Double_Double, Array__Map$Double__Double_Double_Double, Array__Length$Double_Double, Array__IterateIndexed$Double_Double, Array__Initialize$Double_Double, Array__FoldIndexed$Unit__Double_Unit__Double, Array__FoldIndexed$Double__Double_Double_Double;
  Array__FoldIndexed$Double__Double_Double_Double = (function (f, seed, xs)
  {
    var acc = seed;
    for (var i = 0; i <= (Array__Length$Double_Double(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
  });
  Array__FoldIndexed$Unit__Double_Unit__Double = (function (f, seed, xs)
  {
    var acc = seed;
    for (var i = 0; i <= (Array__Length$Double_Double(xs) - 1); i++)
    {
      acc = f(i)(acc)(xs[i]);
      null;
    };
    return acc;
  });
  Array__Initialize$Double_Double = (function (n, f)
  {
    var xs = Array__ZeroCreate$Double_Double(0);
    for (var i = 0; i <= (n - 1); i++)
    {
      xs[i] = f(i);
      null;
    };
    return xs;
  });
  Array__IterateIndexed$Double_Double = (function (f, xs)
  {
    var _228;
    return Array__FoldIndexed$Unit__Double_Unit__Double((function (i)
    {
      return (function (unitVar1)
      {
        return (function (x)
        {
          return f(i)(x);
        });
      });
    }), _228, xs);
  });
  Array__Length$Double_Double = (function (xs)
  {
    return xs.length;;
  });
  Array__Map$Double__Double_Double_Double = (function (f, xs)
  {
    return Array__MapIndexed$Double__Double_Double_Double((function (_arg1)
    {
      return (function (x)
      {
        return f(x);
      });
    }), xs);
  });
  Array__MapIndexed$Double__Double_Double_Double = (function (f, xs)
  {
    var ys = Array__ZeroCreate$Double_Double(Array__Length$Double_Double(xs));
    for (var i = 0; i <= (Array__Length$Double_Double(xs) - 1); i++)
    {
      ys[i] = f(i)(xs[i]);
      null;
    };
    return ys;
  });
  Array__Max$Double_Double = (function (xs)
  {
    return Array__Reduce$Double_Double((function (e1)
    {
      return (function (e2)
      {
        if ((e2 > e1)) 
        {
          return e2;
        }
        else
        {
          return e1;
        };
      });
    }), xs);
  });
  Array__Reduce$Double_Double = (function (f, xs)
  {
    if ((Array__Length$Double_Double(xs) == 0)) 
    {
      throw ("Array was empty");
      return null;
    }
    else
    {
      return Array__FoldIndexed$Double__Double_Double_Double((function (i)
      {
        return (function (acc)
        {
          return (function (x)
          {
            if ((i == 0)) 
            {
              return x;
            }
            else
            {
              return f(acc)(x);
            };
          });
        });
      }), null, xs);
    };
  });
  Array__ZeroCreate$Double_Double = (function (size)
  {
    return new Array(size);;
  });
  LanguagePrimitives__UnboxGeneric$HTMLCanvasElement_HTMLCanvasElement_ = (function (x)
  {
    return x;;
  });
  LanguagePrimitives__UnboxGeneric$Int32_Int32 = (function (x)
  {
    return x;;
  });
  MathJS__Abs$ = (function (x)
  {
    return Math.abs(x);;
  });
  Page__chart$ = (function (values)
  {
    var chart_height = 300.000000;
    var _48;
    var _87;
    var _88;
    var mapping = (function (x)
    {
      return MathJS__Abs$(x);
    });
    _88 = (function (array)
    {
      return Array__Map$Double__Double_Double_Double(mapping, array);
    });
    _87 = _88(values);
    _48 = (function (array)
    {
      return Array__Max$Double_Double(array);
    })(_87);
    var max = _48;
    var canvas = LanguagePrimitives__UnboxGeneric$HTMLCanvasElement_HTMLCanvasElement_((Page__op_Dynamic$JQuery_JQuery_((function (selector)
    {
      return Page__jQuery$(selector);
    }), "canvas")[0]));
    var ctx = (canvas.getContext("2d"));
    (ctx.clearRect(0.000000, 0.000000, (canvas.width), (canvas.height)));
    var _137;
    var _138;
    var action = (function (i)
    {
      return (function (x)
      {
        (ctx.fillStyle) = Page__getColor$(ctx, x);
        null;
        var posX = (i * 16.000000);
        var matchValue = Page__getBarRect$Double_Double(chart_height, posX, max, x);
        var yp = matchValue.Items[1.000000];
        var xp = matchValue.Items[0.000000];
        var wp = matchValue.Items[2.000000];
        var hp = matchValue.Items[3.000000];
        return (ctx.fillRect(xp, yp, wp, hp));
      });
    });
    _138 = (function (array)
    {
      return Array__IterateIndexed$Double_Double(action, array);
    });
    _137 = _138(values);
    return (function (value)
    {
      var ignored0 = value;
    })(_137);
  });
  Page__getBarRect$Double_Double = (function (totalHeight, x, max, value)
  {
    var pixelValue = (totalHeight / (max * 2.000000));
    var height = (MathJS__Abs$(value) * pixelValue);
    if ((value > 0.000000)) 
    {
      return (new TupleDouble_Double_Double_Double(x, ((totalHeight / 2.000000) - height), 15.000000, height));
    }
    else
    {
      return (new TupleDouble_Double_Double_Double(x, (totalHeight / 2.000000), 15.000000, height));
    };
  });
  Page__getColor$ = (function (ctx, value)
  {
    var gradient = (ctx.createLinearGradient(0.000000, 0.000000, 0.000000, 300.000000));
    if ((value < 0.000000)) 
    {
      (gradient.addColorStop(1.000000, "red"));
      (gradient.addColorStop(0.000000, "white"));
    }
    else
    {
      (gradient.addColorStop(1.000000, "white"));
      (gradient.addColorStop(0.000000, "green"));
    };
    return gradient;
  });
  Page__jQuery$ = (function (selector)
  {
    return ((window.$)(selector));
  });
  Page__main$ = (function (unitVar0)
  {
    var getValues = (function (_unitVar0)
    {
      var range = LanguagePrimitives__UnboxGeneric$Int32_Int32((Page__op_Dynamic$JQuery_JQuery_((function (selector)
      {
        return Page__jQuery$(selector);
      }), "rangeValues").val()));
      return Array__Initialize$Double_Double(range, (function (_arg1)
      {
        return ((((window.Math).random()) * 20.000000) - 10.000000);
      }));
    });
    (function (value)
    {
      var ignored0 = value;
    })((Page__op_Dynamic$JQuery_JQuery_((function (selector)
    {
      return Page__jQuery$(selector);
    }), "rangeValues").change((function (_arg2)
    {
      var _43;
      var _45;
      _43 = getValues(_45);
      var values = _43;
      return Page__chart$(values);
    }))));
    var _246;
    var _248;
    _246 = getValues(_248);
    return Page__chart$(_246);
  });
  Page__op_Dynamic$JQuery_JQuery_ = (function (jq, name)
  {
    return jq(("#" + name));
  });
  TupleDouble_Double_Double_Double = (function (Item0, Item1, Item2, Item3)
  {
    this.Items = [Item0, Item1, Item2, Item3];
    this.Items = [Item0, Item1, Item2, Item3];
    this.Items = [Item0, Item1, Item2, Item3];
    this.Items = [Item0, Item1, Item2, Item3];
  });
  Page__main$()