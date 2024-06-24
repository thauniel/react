
'use client';
import React, { useState,useEffect} from 'react';
import { SelectValue, SelectTrigger, Select,SelectItem,SelectContent} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import review_others from './review_others_2.json'
import oto_p_review from './oto_ear_sort_with_refe_p.json'
import oto_n_review from './oto_ear_sort_with_refe_n.json'
import onnshitsu_p_review from'./onnshitsu_ear_sort_with_refe_p.json'
import onnshitsu_n_review from'./onnshitsu_ear_sort_with_refe_n.json'
import nedann_p_Review from './nedann_ear_sort_with_refe_p.json'
import nedann_n_Review from './nedann_ear_sort_with_refe_n.json'
import setsuzoku_p_review from './setsuzoku_ear_sort_with_refe_p.json'
import setsuzoku_n_review from './setsuzoku_ear_sort_with_refe_n.json'
import jyunndenn_p_review from './jyunndenn_ear_sort_with_refe_p.json'
import jyunndenn_n_review from './jyunndenn_ear_sort_with_refe_n.json'
import tsukai_p_review from './tsukai_ear_sort_with_refe_p.json'
import tsukai_n_review from './tsukai_ear_sort_with_refe_n.json'
import seinou_p_review from './seinou_ear_sort_with_refe_p.json'
import seinou_n_review from './seinou_ear_sort_with_refe_n.json'
import tsuwa_p_review from './tsuwa_ear_sort_with_refe_p.json'
import tsuwa_n_review from './tsuwa_ear_sort_with_refe_n.json'
import misuto_p_review from './misuto_p.json'
import misuto_n_review from './misuto_n.json'
import kashitsu_p_review from './kannsou_p.json'
import kashitsu_n_review from './kannsou_n.json'
import oto_p_hum_review from './oto_p.json'
import oto_n_hum_review from './oto_p.json'
import kannsou_p_review from './kannsou_p.json'
import kannsou_n_review from './kannsou_n.json'
import shinnshitsu_p_review from './shinnshitsu_p.json'
import shinnshitsu_n_review from './shinnshitsu_n.json'
import joki_p_review from './joki_p.json'
import joki_n_review from './joki_n.json'
import nedann_p_review from './nedann_p.json'
import nedann_n_review from './nedann_n.json'
import shiyou_p_review from './shiyou_p.json'
import shiyou_n_review from './shiyou_n.json'

interface EcComponentsProps {
  // 定义props的类型
}

const EcComponents: React.FC<EcComponentsProps> = () => {

  const [selectedData, setSelectedData] = useState<string[]>([]);
  const [negativereviewrData, setnegativereviewData] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [leftReferenceData, setLeftReferenceData] = useState<number[]>([]);
  const [rightReferenceData, setRightReferenceData] = useState<number[]>([]);

  // 点击事件处理函数，根据不同的按钮设置不同的数据，左边
  const handleBadgeClick = (reviews: string[],reference: number[]) => {
    setSelectedData(reviews);
    setnegativereviewData([]);
    setLeftReferenceData(reference);
    setRightReferenceData([])
  };
 
  // 点击事件处理函数，根据不同的按钮设置不同的数据，右边
  const handleOtherBadgeClick = (reviews: string[],reference:number[]) => {
    setnegativereviewData(reviews);
    setRightReferenceData(reference);
  };
  const productNames = ["Product 1", "Product 2", "Product 3"];
  // const productGenres = ["イヤホン", "加湿器"];
  const productData: { [key: string]: string[] } = {
    "イヤホン": ["QCY-T1C完全ワイヤレスイヤホン第3/4世代", "	mv7n2j/a　AirPods（第2世代"],
    "加湿器": ["小型加湿器S08"]
  };
  const productGenres = Object.keys(productData);
  return (
    <div className="flex flex-col items-center justify-center p-4">
     <div className="flex justify-between space-x-2 mb-4 w-full">
     <Select onValueChange={(value) => {
          setSelectedGenre(value);
          setSelectedProduct('');  // Reset selected product when genre changes
        }}>
          <SelectTrigger className="border rounded-md py-2 px-4 ">
            <SelectValue placeholder="商品ジャンル" />
          </SelectTrigger>
        <SelectContent>
            {productGenres.map((genre, index) => (
              <SelectItem key={index} value={genre}>{genre}</SelectItem>
            ))}
        </SelectContent>
        </Select>
        <Select value={selectedProduct} onValueChange={setSelectedProduct}>
          <SelectTrigger className="border rounded-md py-2 px-4 ">
            <SelectValue placeholder="商品名" />
          </SelectTrigger>
        <SelectContent>
            {(productData[selectedGenre] || []).map((name, index) => (
              <SelectItem key={index} value={name}>{name}</SelectItem>
            ))}
        </SelectContent>
        </Select>
      </div>

      {/* <div className="relative flex justify-center items-center h-10 bg-red-500"> */}
      
       {/* <div className="absolute top-20 bg-blue-500 "> */}
        {/* <div className="flex space-x-2 mb-4 bg-green-500"> */}
        {/* <div className="absolute top-0  h-5 ">
         <div className="flex space-x-2 mb-4"> */}
      {/* <div className=' flex justify-center space-x-2 mb-4'> */}
        <div className='  flex space-x-2 mb-4 '>
          <Badge 
          className="rounded-full py-2 px-4 bg-red-500 " 
          variant="secondary"
          title='positive:228 negative:126'
          onClick={() => {
          handleBadgeClick(oto_p_review.reviews,oto_p_review.reference)
          handleOtherBadgeClick(oto_n_review.reviews,oto_n_review.reference);
          }}
         style={{ visibility: selectedProduct === 'QCY-T1C完全ワイヤレスイヤホン第3/4世代' ? 'visible' : 'hidden' }}
         >
          音
         </Badge>
   
         <Badge 
         className="rounded-full py-2 px-4 bg-red-500  " 
         variant="secondary"
         title='positive:269 negative:53'
         onClick={() => {
          handleBadgeClick(onnshitsu_p_review .reviews,onnshitsu_p_review .reference)
          handleOtherBadgeClick(onnshitsu_n_review .reviews,onnshitsu_n_review .reference);
         }}
         style={{ visibility: selectedProduct === 'QCY-T1C完全ワイヤレスイヤホン第3/4世代' ? 'visible' : 'hidden' }}
         >
          音質
         </Badge>
         <Badge className="rounded-full py-2 px-4 bg-red-500" 
         variant="secondary"
         title='positive:157 negative:19'
         onClick={() => {
          handleBadgeClick(nedann_p_Review.reviews,nedann_p_Review.reference)
          handleOtherBadgeClick(nedann_n_Review.reviews,nedann_n_Review.reference);
         }}
         style={{ visibility: selectedProduct === 'QCY-T1C完全ワイヤレスイヤホン第3/4世代' ? 'visible' : 'hidden' }}>
          値段
         </Badge>
         <Badge className="rounded-full py-2 px-4 bg-red-500"
         title='positive:76 negative:16'
         variant="secondary"
         onClick={() => {
          handleBadgeClick(setsuzoku_p_review.reviews,setsuzoku_p_review.reference)
          handleOtherBadgeClick(setsuzoku_n_review.reviews,setsuzoku_n_review.reference);
         }}
         style={{ visibility: selectedProduct === 'QCY-T1C完全ワイヤレスイヤホン第3/4世代' ? 'visible' : 'hidden' }}>
          接続
         </Badge>
         <Badge className="rounded-full py-2 px-4 bg-red-500" 
         variant="secondary"
         title='positive:48 negative:0'
         onClick={() => {
          handleBadgeClick(tsukai_p_review.reviews,tsukai_p_review.reference)
          handleOtherBadgeClick(tsukai_n_review.reviews,tsukai_n_review.reference);
         }}
         style={{ visibility: selectedProduct === 'QCY-T1C完全ワイヤレスイヤホン第3/4世代' ? 'visible' : 'hidden' }}
         >
          使い勝手
         </Badge>
         <Badge className="rounded-full py-2 px-4 bg-red-500" 
         variant="secondary"
         title='positive:22 negative:0'
         onClick={() => {
          handleBadgeClick(seinou_p_review.reviews,seinou_p_review.reference)
          handleOtherBadgeClick(seinou_n_review.reviews,seinou_n_review.reference);
         }}
         style={{ visibility: selectedProduct === 'QCY-T1C完全ワイヤレスイヤホン第3/4世代' ? 'visible' : 'hidden' }}
         >
          性能
         </Badge>
         <Badge className="rounded-full py-2 px-4 " 
         variant="secondary"
         title='positive:36 negative:28'
         onClick={() => {
          handleBadgeClick(jyunndenn_p_review.reviews,jyunndenn_p_review.reference)
          handleOtherBadgeClick(jyunndenn_n_review.reviews,jyunndenn_n_review.reference);
         }}
         style={{ visibility: selectedProduct === 'QCY-T1C完全ワイヤレスイヤホン第3/4世代' ? 'visible' : 'hidden' }}>
          充電
         </Badge>
         <Badge className="rounded-full py-2 px-4 " 
         variant="secondary"
         title='positive:11 negative:9'
          onClick={() => {
          handleBadgeClick(tsuwa_p_review.reviews,tsuwa_p_review.reference)
          handleOtherBadgeClick(tsuwa_n_review.reviews,tsuwa_n_review.reference);
           }}
         style={{ visibility: selectedProduct === 'QCY-T1C完全ワイヤレスイヤホン第3/4世代' ? 'visible' : 'hidden' }}
         >
          通話
          </Badge>
        </div>
        {/* </div> */}
      

       {/* <div className="absolute top-0 bottom-5"> */}
      <div className='flex space-x-2 mb-4'>
       <Badge className="rounded-full py-4 px-4 bg-red-500"
        variant="secondary"
        title='positive:115 negative:17'
        onClick={() => {
          handleBadgeClick(misuto_p_review.reviews,misuto_p_review.reference)
          handleOtherBadgeClick(misuto_n_review.reviews,misuto_n_review.reference);
        }}
        style={{ visibility: selectedProduct === '小型加湿器S08' ? 'visible' : 'hidden' }}
        >
          ミスト
        </Badge>
        <Badge className="rounded-full py-2 px-4 bg-red-500" 
        variant="secondary"
        title='positive:82 negative:36'
        onClick={() => {
          handleBadgeClick(oto_p_hum_review.reviews,oto_p_hum_review.reference)
          handleOtherBadgeClick(oto_n_hum_review.reviews,oto_n_hum_review.reference);
        }}
        style={{ visibility: selectedProduct === '小型加湿器S08' ? 'visible' : 'hidden' }}
        >
          音
        </Badge>

        <Badge className="rounded-full py-2 px-4 bg-red-500" 
        variant="secondary"
        title='positive:34 negative:4'
        onClick={() => {
          handleBadgeClick(nedann_p_review.reviews,nedann_p_review.reference)
          handleOtherBadgeClick(nedann_n_review.reviews,nedann_n_review.reference);
        }}
        style={{ visibility: selectedProduct === '小型加湿器S08' ? 'visible' : 'hidden' }}
        >
          値段
        </Badge>

        <Badge className="rounded-full py-4 px-4 bg-red-500" 
        variant="secondary"
        title='positive:32 negative:6'
        onClick={() => {
          handleBadgeClick(kashitsu_p_review.reviews,kashitsu_p_review.reference)
          handleOtherBadgeClick(kashitsu_n_review.reviews,kashitsu_n_review.reference);
        }}
        style={{ visibility: selectedProduct === '小型加湿器S08' ? 'visible' : 'hidden' }}
        >
          加湿
        </Badge>

        <Badge className="rounded-full py-2 px-4 bg-red-500" 
        variant="secondary"
        title='positive:17 negative:9'
        onClick={() => {
          handleBadgeClick(joki_p_review.reviews,joki_p_review.reference)
          handleOtherBadgeClick(joki_n_review.reviews,joki_n_review.reference);
        }}
        style={{ visibility: selectedProduct === '小型加湿器S08' ? 'visible' : 'hidden' }}
        >
          蒸気
        </Badge>

        <Badge className="rounded-full py-2 px-4 bg-red-500" 
        variant="secondary"
        title='positive:6 negative:2'
        onClick={() => {
          handleBadgeClick(shiyou_p_review.reviews,shiyou_p_review.reference)
          handleOtherBadgeClick(shiyou_n_review.reviews,shiyou_n_review.reference);
        }}
        style={{ visibility: selectedProduct === '小型加湿器S08' ? 'visible' : 'hidden' }}
        >
          使用
        </Badge>

        <Badge className="rounded-full py-2 px-4 bg-red-500" 
        variant="secondary"
        title='positive:6 negative:0'
        onClick={() => {
          handleBadgeClick(shinnshitsu_p_review.reviews,shinnshitsu_p_review.reference)
          handleOtherBadgeClick(shinnshitsu_n_review.reviews,shinnshitsu_n_review.reference);
        }}
        style={{ visibility: selectedProduct === '小型加湿器S08' ? 'visible' : 'hidden' }}
        >
          寝室
        </Badge>

        <Badge className="rounded-full py-2 px-4 bg-blue-500" 
        variant="secondary"
        title='positive:5 negative:21'
        onClick={() => {
          handleBadgeClick(kannsou_p_review.reviews,kannsou_p_review.reference)
          handleOtherBadgeClick(kannsou_n_review.reviews,kannsou_n_review.reference);
        }}
        style={{ visibility: selectedProduct === '小型加湿器S08' ? 'visible' : 'hidden' }}
        >
          乾燥
        </Badge>
      </div>
    {/* </div> */}
      {/* </div> */}
      
      {/* </div> */}
     <div className="w-full mb-4 h-[600px] flex  ">
        <ScrollArea className="border border-red-500 rounded-md h-[600px] w-1/2 ">
          <div className="flex flex-col space-y-2 p-4">
            {/* 根据 selectedData 数组中的内容渲染 */}
            {selectedData.map((review, index) => (
              <div key={index} className="border-b py-2">
                <div className="flex flex-col">
                <div>{review}</div>
                <div className="text-right mt-2 text-sm text-gray-500">
                  References: {leftReferenceData[index]}
                  </div>
                </div>
              </div>
            ))}
         </div>
        </ScrollArea>
      
      
        <ScrollArea className="border border-blue-500 rounded-md h-[600px] w-1/2 ">
         <div className="flex flex-col space-y-2 p-4">
          {negativereviewrData.map((review, index) => (
           <div key={index} className="border-b py-2">
            <div className="flex flex-col">
             <div>{review}</div>
             <div className="text-right mt-2 text-sm text-gray-500">
                  References: {rightReferenceData[index]}
             </div>
            </div>
          </div>
           ))}
          </div>
        </ScrollArea>
     
      </div>
      {/* <div className="flex justify-center items-center w-full">
      <div className="text-sm text-gray-500 dark:text-gray-400 justify-between">その他↓</div>
      </div> */}
    </div>
  );
}

interface ChevronIconProps {
  className?: string;
}

function ChevronDownIcon({ className }: ChevronIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronUpIcon({ className }: ChevronIconProps) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}
export default EcComponents;