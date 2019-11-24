<l-tabs bind:linchange="changeTabs" animated="true" class="container">
    <l-tabpanel tab="推荐" key="one" slot="one">
        <view class="tab-content">
            <c-home-recommend />
        </view>
    </l-tabpanel>
    <l-tabpanel tab="热门" key="two" slot="two">
        <view class="tab-content">
            <c-hot />
        </view>
    </l-tabpanel>
    <l-tabpanel tab="树洞" key="three" slot="three">
        <view class="tab-content">
            <c-gossip />
        </view>
    </l-tabpanel>
    <l-tabpanel tab="活动" key="four" slot="four">
        <view class="tab-content">
            <c-home-activity />
        </view>
    </l-tabpanel>
</l-tabs>