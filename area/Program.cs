short figure = 0;
double radius = 0;
double Base = 0;
double height = 0;
while(figure != 3)
{
    Console.WriteLine("Figure:");
    Console.WriteLine("1. Circle");
    Console.WriteLine("2. Rectangle");
    try
    {
        figure = Convert.ToInt16(Console.ReadLine());
        if (figure == 1)
        {
            getRadius:
            Console.WriteLine("Radius:");
            try
            {
                radius = Convert.ToDouble(Console.ReadLine());
                Circle circle = new Circle(radius);
                Console.WriteLine("Area is " + circle.area() + " square units");
            }
            catch
            {
                Console.WriteLine("Invalid radius");
                goto getRadius;
            }
        }
        if (figure == 2)
        {
            getBase:
            Console.WriteLine("Base:");
            try
            {               
                Base = Convert.ToDouble(Console.ReadLine());
            }
            catch
            {
                Console.WriteLine("Invalid base");
                goto getBase;
            }
            getHeight:
            Console.WriteLine("Height:");
            try
            {
                height = Convert.ToDouble(Console.ReadLine());
                Rectangle rectangle = new Rectangle(Base, height);
                Console.WriteLine("Area is " + rectangle.area() + " square units");
            }
            catch
            {
                Console.WriteLine("Invalid height");
                goto getHeight;
            }
        }
        if (figure != 1 && figure != 2) figure = 3;
    }
    catch
    {
        Console.WriteLine("Invalid choice. 1 or 2 expected");
    }
}
