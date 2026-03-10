
 import java.util.ArrayList;

public class StudentService {

    private ArrayList<Student> students = new ArrayList<>();

    // Add student
    public void addStudent(int id, String name, String dept) {
        Student s = new Student(id, name, dept);
        students.add(s);
    }

    // View students
    public ArrayList<Student> getAllStudents() {
        return students;
    }

    // Delete student
    public boolean deleteStudent(int id) {
        for(Student s : students) {
            if(s.getId() == id) {
                students.remove(s);
                return true;
            }
        }
        return false;
    }
}


