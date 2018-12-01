package com.weex.app.extend;

import android.content.Context;
import android.support.annotation.NonNull;
import android.webkit.WebView;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;

/**
 * webView扩展-展示新闻详情
 */
public class WebviewCompontent extends WXComponent<WebView> {
    public WebviewCompontent(WXSDKInstance instance, WXDomObject dom, WXVContainer parent) {
        super(instance, dom, parent);
    }

    @Override
    protected WebView initComponentHostView(@NonNull Context context) {
        WebView webView = new WebView(context);
        return webView;
    }

    // 设置内容
    @WXComponentProp(name = "content")
    public void setContent(String content) {
        String htmlStr = resetImg(content);
        getHostView().loadData(htmlStr,"text/html; charset=UTF-8",null);
    }

    // 重置img标签
    private String resetImg(String content) {
        String head = "<head>" +
                "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\"> " +
                "<style>img{max-width:100% !important; width:auto; height:auto;}</style>" +
                "</head>";
        String html = "<html>" + head + "<body style:'height:auto;max-width: 100%; width:auto;'>" + content + "</body></html>";
        return html;
    }
}
