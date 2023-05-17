using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

abstract class Figure
{
    public abstract double area();
}

class Circle : Figure
{
    public double radius;

    public Circle(double radius)
    {
        this.radius = radius;
    }

    public override double area()
    {
        return Math.PI * Math.Pow(radius, 2);
    }
}

class Rectangle : Figure
{
    public double Base;
    public double height;

    public Rectangle(double Base, double height)
    {
        this.Base = Base;
        this.height = height;
    }

    public override double area() { 
        return Base * height; 
    }   
}