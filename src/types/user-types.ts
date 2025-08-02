// src/types/user-types.ts

// 1. 定义对象类型
type User = {
  id: number;
  name: string;
  email?: string; // 可选属性（可传可不传）
  isActive: boolean;
};

// 2. 定义联合类型
type Role = "admin" | "user" | "guest";

// 3. 定义嵌套类型
type Profile = {
  user: User;
  role: Role;
  permissions: string[];
};

// 4. 使用类型
const currentUser: User = {
  id: 1,
  name: "Bob",
  isActive: true
};

const adminRole: Role = "admin";

export { type User, type Role, type Profile, currentUser };    
