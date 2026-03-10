import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        StudentService service = new StudentService();

        while(true) {
            System.out.println("\n---- Student Management System ----");
            System.out.println("1. Add Student");
            System.out.println("2. View Students");
            System.out.println("3. Delete Student");
            System.out.println("4. Exit");
            System.out.print("Enter choice: ");

            int choice = sc.nextInt();

            switch(choice) {
                case 1:
                    System.out.print("Enter ID: ");
                    int id = sc.nextInt();
                    sc.nextLine();

                    System.out.print("Enter Name: ");
                    String name = sc.nextLine();

                    System.out.print("Enter Department: ");
                    String dept = sc.nextLine();

                    service.addStudent(id, name, dept);
                    System.out.println("✅ Student Added Successfully!");
                    break;

                case 2:
                    System.out.println("\n--- Student List ---");
                    for(Student s : service.getAllStudents()) {
                        System.out.println(
                            "ID: " + s.getId() +
                            ", Name: " + s.getName() +
                            ", Dept: " + s.getDepartment()
                        );
                    }
                    break;

                case 3:
                    System.out.print("Enter ID to delete: ");
                    int delId = sc.nextInt();

                    if(service.deleteStudent(delId)) {
                        System.out.println("🗑️ Student Deleted!");
                    } else {
                        System.out.println("❌ Student Not Found!");
                    }
                    break;

                case 4:
                    System.out.println("Exiting...");
                    System.exit(0);
                    break;

                default:
                    System.out.println("Invalid choice!");
            }
        }
    }
}


