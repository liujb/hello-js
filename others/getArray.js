import java.util.*;

public class InputTest {
    public static void main(String[] args) {
        Scanner in = new Scanner(System. in );
        System.out.println("what is your name?");
        String name = in .nextLine();

        System.out.println("How old are you!");
        int age = in .nextInt();

        System.out.println("Hello " + name + " Nice to meet you! I know how old are ," + age + " right?");

        /**
        Console console=System.console();
        System.out.println("Enter your loginname！");
        String loginName=console.readLine();
        System.out.println("Enter your password！");
        char[] password=console.readPassword();//专门为了从控制台输入密码用
        */

    }
}