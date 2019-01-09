public class MyClass {
    private int id;
    private String name;
    private int age;

    public MyClass(int id , String name , int age){    
        this.id = id;
        this.name = name;
        this.age = age;
    }


    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    MyClass(){
        System.out.println("hello world");
    }

    public String toString(){
        return "my id is" + id + "and my name is " + name ;
    }
}
