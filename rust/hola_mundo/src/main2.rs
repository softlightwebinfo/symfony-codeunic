fn main2() {
    let n = 10_100_234;
    let a:u8 = 255;
    println!("{:?}", a.checked_add(1));
    println!("{:?}", a.wrapping_add(1));
    println!("{:?}", a.saturating_add(1));
    f(n);
    println!("{}", 12i32.abs());
}

fn f(n: i32) {
    println!("n={}", n)
}