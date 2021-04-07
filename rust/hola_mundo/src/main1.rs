fn main1() {
    let (mut x, y, z) = (1, 2, 3);
    let st: Ejemplo = Ejemplo { a: 121, b: 200 };
    println!("x = {}", x);
    x = f();
    println!("x = {}", x);
    println!("Y = {}", y);
    println!("Z = {}", z);
    println!("x = {:?}", st);

    //patron machine
    let Ejemplo { a: n, b } = Ejemplo { a: 12, b: 2000 };
    println!("a={},b={}", n, b);
}

fn f() -> i32 {
    42
}

#[derive(Debug)]
struct Ejemplo {
    a: i32,
    b: i32,
}