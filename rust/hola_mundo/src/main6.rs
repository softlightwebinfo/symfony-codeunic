fn main6() {
    let r = f("1");
    println!("{:?}", r);
}

fn f(s: &str) -> Result<(), Box<dyn std::error::Error>> {
    let n = s.parse::<i32>()?;
    println!("{}", n);
    Ok(())
}