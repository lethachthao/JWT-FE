import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const cookies = req.headers.get('cookie') || ''; // Lấy cookie từ headers
  const token = cookies
    .split('; ')
    .find(row => row.startsWith('token='))
    ?.split('=')[1]; // Lấy token

  const userRole = cookies
    .split('; ')
    .find(row => row.startsWith('role='))
    ?.split('=')[1]; // Lấy role

  const url = req.nextUrl.pathname; // Lấy URL hiện tại

  // Kiểm tra nếu truy cập trang admin
  if (url.startsWith('/admin')) {
    if (!token || userRole !== 'admin') {
      return NextResponse.redirect(new URL('/login', req.url)); // Chuyển hướng nếu không có quyền
    }
  }

  return NextResponse.next(); // Tiếp tục nếu hợp lệ
}

// Áp dụng middleware cho tất cả route có /admin/*
export const config = {
  matcher: ['/admin/:path*'],
};
