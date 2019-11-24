<view class="container">
    <c-fakeSearch wx:if="{{!searching}}" bind:onSearching="onSearching" />
    <c-search wx:if="{{searching}}" bind:onCancel="onCancel" />

    <view wx:if="{{!searching}}" class="article-container">
        <view>
            <view class="personal-container">
                <image class="head-portrait" src="/images/logo/campus-logo.png" />
                <view class="message-top">
                    <text class="nickname">囡囡</text>
                    <text class="datetime">12:52</text>
                </view>
            </view>
            <view class="content-container">
                <view>
                    <view class="title-container">
                        <text class="title">美食节来了</text>
                    </view>
                    <view class="article">
                        <text>10月19日至23日，由中国饭店协会、杭州市人民政府主办，杭州市商务委员会、杭州市会展办承办的第十九届中国（杭州）美食节在秋景宜人的西溪天堂成功举办。这是去年12月获得“世界美食名城”称号后，杭州迎来的第一次大型美食展示活动，它已不仅是一场属于杭州市民的“舌尖狂欢”，规模更大、覆盖范围更广，同时也更具“国际范”。开幕式上，乌兹别克斯坦、捷克、斯洛伐克、斯里兰卡、韩国、泰国、俄罗斯、匈牙利、美国等9个国家的外籍友人也带来独具特色的表演，奉上了一场从鼻尖舌尖到视觉听觉的全方位“诱惑”。</text>
                    </view>
                </view>
                <image class="article-img" src="/images/user/article.png" />
            </view>
            <view class="floor">
                <c-thumbs-up praiseNums="{{18}}" />
                <c-comment commentNums="{{22}}" />
            </view>
        </view>
        <view>
            <view class="personal-container">
                <image class="head-portrait" src="/images/user/campus-bg.png" />
                <view class="message-top">
                    <text class="nickname">热忱</text>
                    <text class="datetime">19:36</text>
                </view>
            </view>
            <view class="content-container">
                <view>
                    <view class="title-container">
                        <text class="title">活动来20个网络刷单,一分钟搞定</text>
                    </view>
                    <view class="article">
                        <text class="article">各位不好意思，小公司，酬劳不高。

                            一人只能刷一单，一分钟搞定，微信扫一扫关注就行，给一块钱。

                            反正没有任何费用，不是乱七八糟的事。

                            有闲情的就加我微信</text>
                    </view>
                </view>
            </view>
            <view class="floor">
                <c-thumbs-up praiseNums="{{7}}" />
                <c-comment commentNums="{{10}}" />
            </view>
        </view>
    </view>
</view>