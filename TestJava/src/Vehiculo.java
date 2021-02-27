abstract class Vehiculo {
    protected int ruedas;
    protected String color;

    public int getRuedas() {
        return ruedas;
    }
}

class Coche extends Vehiculo {
    private int combustible;

    public void mover() {

    }
}

class Moto extends Vehiculo {

}

class Example {
    void getExample() {
        Coche coche = new Coche();
        coche.mover();
    }
}
