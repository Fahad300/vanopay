"use client";

import { Button, Card, Space } from "antd";

/**
 * Home page component
 * Demonstrates both Tailwind CSS and Ant Design working together
 */
export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Welcome to VanoPay
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Tailwind CSS and Ant Design are working together!
                    </p>
                </div>

                <Space direction="vertical" size="middle" className="w-full">
                    <Button type="primary" block>
                        Primary Button (Ant Design)
                    </Button>
                    <Button block>Default Button (Ant Design)</Button>
                    <Button type="dashed" block>
                        Dashed Button (Ant Design)
                    </Button>
                    <div className="text-center text-sm text-gray-500">
                        Layout uses Tailwind, buttons use Ant Design
                    </div>
                </Space>
            </Card>
        </div>
    );
}

