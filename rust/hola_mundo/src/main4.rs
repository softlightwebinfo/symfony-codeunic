fn main4() {
    let s = "hola mundo que tal estas";
    let (a, b) = s.split_at(4);
    let (num, name, active) = (1, "hello world", false);
    println!("{}, {}, {}", num, name, active);
    println!("{}, {}", a, b);
}