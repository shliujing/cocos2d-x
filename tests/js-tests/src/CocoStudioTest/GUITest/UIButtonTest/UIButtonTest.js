/****************************************************************************
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011-2012 cocos2d-x.org
 Copyright (c) 2013-2014 Chukong Technologies Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var UIButtonEditorTest = UIBaseLayer.extend({
    ctor: function () {
        this._super();
        var root = this._parseUIFile("ccs-res/cocosui/UIEditorTest/UIButton/Button_1.json");
        this._mainNode.addChild(root);

        var back_label = ccui.helper.seekWidgetByName(root, "back");
        back_label.addTouchEventListener(this.backEvent,this);

        var button = ccui.helper.seekWidgetByName(root, "Button_123");
        button.addTouchEventListener(this.touchEvent,this);

        var title_button = ccui.helper.seekWidgetByName(root, "Button_126");
        title_button.addTouchEventListener(this.touchEvent,this);

        var scale9_button = ccui.helper.seekWidgetByName(root, "Button_129");
        scale9_button.addTouchEventListener(this.touchEvent,this);
    },

    touchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                this._topDisplayText.setString("Touch Down");
                break;

            case ccui.Widget.TOUCH_MOVED:
                this._topDisplayText.setString("Touch Move");
                break;

            case ccui.Widget.TOUCH_ENDED:
                this._topDisplayText.setString("Touch Up");
                break;

            case ccui.Widget.TOUCH_CANCELED:
                this._topDisplayText.setString("Touch Cancelled");
                break;

            default:
                break;
        }
    }
});
