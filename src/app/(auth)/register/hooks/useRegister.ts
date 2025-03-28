import apiClient from "@/utils/apiClient";
import { useMutation } from "@tanstack/react-query";
import { App } from "antd";
import { useRouter } from "next/navigation";

export const useSignup = () => {
    const { message } = App.useApp();
    const router = useRouter();

    return useMutation({
        mutationFn: (data: FormData) =>
            apiClient.post('register', data, {
                headers: { 'Content-Type': 'multipart/form-data' },
            }),
        onSuccess: () => {
            message.success('Đăng kí thành công!');
            router.replace('/');
        },
        onError: () => {
            message.error('Đăng kí không thành công!');
        },
    });
};
