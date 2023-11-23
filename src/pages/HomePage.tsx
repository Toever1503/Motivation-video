import { Button, Card, Pagination, PaginationProps } from "antd"
import { useState } from "react";

const { Meta } = Card;
export function HomePage() {

    const [paginationConfig, setPaginationConfig] = useState({
        current: 1
    })

    const onPageChange: PaginationProps['onChange'] = (page) => {
        console.log(page);
        setPaginationConfig({
            ...paginationConfig,
            current: page
        });
    };
    return (<div className="bg-vlak">
        <div className="video_list flex flex-wrap gap-[20px] justify-center">
            {
                [1, 2, 3, 4, 5, 6].map(i => (
                    <Card
                        className="video_item bg-black p-[10px]"
                        hoverable
                        bodyStyle={{ padding: 0 }}
                        style={{ width: 240 }}
                        cover={<video controls className="w-[240px] h-[250px]">
                            <source src="https://pub-127a3415565a4083b68ba27fd1e2ac17.r2.dev/382448865_1473644956923514_3707064198804221751_n.mp4" />
                        </video>}
                    >
                        <div className="text-white text-sm" >
                            <div className="flex gap-[12px]">
                                <span>Nguồn:</span>
                                <a className="text-yellow-500" target="_blank" href="/">fb</a>
                            </div>

                            <div className="flex gap-[12px]">
                                <span>Người đăng:</span>
                                <a className="text-yellow-500" target="_blank" href="/">Orisu</a>
                            </div>
                            {/* <Button size="small">Chi tiet</Button> */}
                        </div>
                    </Card>
                ))
            }


        </div>

        <div className="flex justify-center mt-[25px]">
            <Pagination current={paginationConfig.current} onChange={onPageChange} total={50} />
        </div>
    </div>)
}