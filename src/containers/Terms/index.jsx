import React, { Component } from 'react'
import './index.scss'
import {setPageTitle} from '../../actions/public'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Terms extends Component {
    componentWillMount () {
        const {dispatch} = this.props
        dispatch(setPageTitle('活动报名'))
    }
    createMarkup () {
        let _str = `<pre class="rich-text"><p><span style="font-size: 14px; font-family: 微软雅黑, 'Microsoft YaHei'">请仔细阅读以下条款以及参与者身体状况要求：<br>

1、该协议的目的是为了活动发起人或组织者或领队（以下协议中简称：发起者）和同行成员明确知晓户外活动所存在的风险，提高参加人员的抗风险和自律能力，免除活动的发起人和同行成员在活动中出现的相关赔偿及法律连带等责任，让户外活动更加安全、健康、快乐。<br>
2、活动中，对于违犯国家相关法规、恶意侵犯他人或其它涉及犯罪行为的事件，则不在此《报名条款》范围内，必须由个人承担相应的法律责任。<br>
3、凡报名参加活动的人员，均视为具有完全民事行为能力的人，均视为你已经仔细阅读和完全理解并同意接受以下《报名条款》的全部条款，方可参加本次活动。<br>
4、此协议为相关责任的豁免，权利的放弃，风险的承担和免赔的协议。你如果在此协议上签字，你就已经完全知晓、理解和同意接受《报名条款》全部条款，你就放弃了向活动发起者和其他参加成员提起诉讼的权利；永远免除此次活动的发起者和同行成员的赔偿及法律连带责任。<br>
<strong> 一、风险的承担：</strong><br>
我参加此次活动是在完全自愿的基础上，依签署此有关豁免、权利放弃和风险自担的协议为前提要件的。我知晓活动的发起者只是活动的联系人，并非职业的领队，向导或有许可证的急救人员。我知晓他和同行的成员可能并没有参加过户外领队的课程或急救（包括野外）的培训和经验。我知晓他们并不能对我安全负责。<br>
<strong>二、关于豁免责任，放弃权利和赔偿的协议内容：</strong><br>
1、本次活动非旅行社组团旅游；是属于个人设计的出行日期及路线，活动性质仅限共同爱好者自愿参加、共同参与、风险自担、责任自负；发起者和其它参加活动人员一样，同样也是自愿参与者，对其他参加者没有绝对的管理和支配权力；对于活动中突发的一切足以影响到大家切身安全和利益的不可抗因素等重大事项尚需参加者共同商定；活动中发起者仅有义务对全队活动进行组织协调，参加者也有义务服从活动的整体安排。<br>
2、凡报名参加本次活动的人员均视为你已经仔细阅读、完全理解责任豁免、权利的放弃、风险的承担和赔偿的协议的全部条款内容！代他人报名和带外挂，需告知被代报人和被外挂人《报名条款》的全部条款，参加活动的被代报人和被外挂人也视同接受了本协议全部条款。同时，我知晓报名前必须事先与自己的家属沟通，取得家属的理解和支持，知晓并同意接受本协议全部条款后，报名后视同其家属也已知情并同意。<br>
3、户外运动不同于常规的旅游活动，采取的线路也不是一般的常规旅游线路，有时气象条件也非常规，而是具有一定的探险性质；该项运动本身最大的特点在于其具有一定的风险性；活动安排的时间是估算时间，实际活动时间可能出现较大的差异；报名前，我已阅读活动内容和《报名条款》的全部条款，并经过合理判断，同意接受本活动计划和《报名条款》全部条款，同意自行承担本次活动的所有的风险和后果；包括交通工具及其他第三方设施带来的风险；如果由于我的行为和我的参与而导致了第三方的财产损失和人员伤害，我愿意承担相应的损失和责任，导致我本人伤害，我同意免除所有其他人的赔偿和连带责任。<br>
4、参加本次活动，包括徒步、登山、骑马、徒步、攀岩、攀冰、滑雪、滑冰、涉水、游泳、郊游、途中乘车、住宿（露营）、就餐、球类以及装备的使用等活动。上述等活动都存在有潜在危险，可能会受到身体损伤、瘫痪、甚至死亡的风险，我也知道健身和休闲等活动也存在突发病、心脏病等和甚至死亡的风险；我自愿参加这些活动和使用活动装备，如果因为在参加上述某一活动中受到任何伤害，我同意自行承担和接受所有伤害的风险，甚至死亡的风险，并且放弃追究和要求赔偿的权利，同时我永远免除此次活动发起者和同行成员的赔偿及法律连带责任。<br>
5、本次活动可能对身体和精神方面都有一定考验，可能遇到包括在恶劣天气中进行活动，也可能远离救助和医疗服务地点，短时间（或24小时）内无法得到救援，也有可能遇到包括跌坠、落石、冰崩、雪崩、闪电、过河、失温、冻伤、咬伤、刺伤、犬咬、野兽等袭击及各种意外伤害，甚至死亡；我清楚的知晓活动发起者无法全面预见该活动中所有的风险和不利，我知道以上所列的风险并不完全包含本次活动中的所有可能的风险；当我成万一遇到上述等伤害后，所有救援和医疗等全部费用我同意全部承担，活动的发起者和其它参加者不承担所发生的一切费用和法律连带责任；同时我永远免除此次活动的发起者和同行成员的赔偿和法律责任，并不仅限于以上所列的风险中。<br>
6、如果此活动往返是自驾或包车，同样存在较大危险，我清楚获知我已经被提供了自由选择的权利，我同意乘座或自驾车，一旦发生交通事故和受到伤害，甚至死亡,我同意只在该车已投保的保险范围额度内接受保险公司的赔偿，不再另行向该车主（司机）索赔；如我是车主（司机）受到伤害，甚至死亡，我也同意只在该车已投保的保险范围额度内接受保险公司的赔偿；发起者和其它成员不承担任何赔偿和法律责任；我永远免除此次活动发起者和同行成员的赔偿及法律连带责任。车主（司机）由于违反相应交通法规等行为所造成的损失或伤害，不在此《报名条款》范围内，按国家相关规定承担相应责任和自行办理。<br>
7、我清楚知道此次活动发起者不是保险公司，没有义务为我购买意外保险等险种，我知道自己购买保险的意义，以防万一；我知道发起者已在活动内容中提醒我本人，在活动开始前自己了解保险类别和购买保险；对于活动中可能出现的意外事故，可由投保的保险公司承担相应的责任。<br>
8、在此我谨宣布我自己身体健康，适合参加本次活动，身体没有损伤、病痛、心脏病、突发病历或其它疾病；我理解通过以下措施来减少我的风险：注意环境，注意我的身体和精神状况，注意所有与安全相关的衣物和装备的适用状况，我只参加那些自己精神和身体能力之内的活动；我清楚知道，我的安全是我个人的责任，并取决于我的警惕和良好的判断；我同意和保证，如果任何时候我认为是不安全的，那么我会立刻中断活动的进行。如我在活动中发生各种疾病或伤害，甚至死亡，我同意放弃追究和要求赔偿的权利，同时我永远免除此次活动发起者和同行成员的赔偿及法律连带责任。<br>
9、当由于出现各种意外事故、突发气候变化和急性疾病等不可预测因素造成身体损害时，发起者和同行成员有义务尽力救助，但如果造成了不可逆转的损害，我同意放弃追究和要求赔偿的权利，同时我永远免除此次活动发起者和同行成员的赔偿及法律连带责任；我完全理解，在同伴需要协助的时候，我将配合协助发起者及同行成员尽力协助我的同伴，但这只是在以下情况：在我的判断中，这是自己力所能及的范围内，并且不会给自己带来不合理的危险；我进一步理解到，我没有法律上的责任去协助别人，同时，发起者以及我的同伴或者其他成员也没有任何法律上的责任来协助我。<br>
10、我在此特意和有意的声明：我已经年满18岁！我已阅读和理解以上声明和全部条款内容；我理解参加此次户外活动相关的风险；我同意承担由于选择和参加此次户外活动而随之来的全部责任；对于参加本次活动而引发或与之连带的任何和所有的法律要求（包括第三方的法律要求）和无论出现任何形式和性质的害伤，无论这些法律要求是基于某方的疏忽或其它原因引起的，我永远免除此次活动发起者和同行成员的赔偿及法律责任。<br>
11、我知晓报名前必须事先与自己的家属沟通，取得家属的理解和支持，知道并同意接受本协议全部条款后，才能报名参加本次活动，报名后视同其家属也已知情并同意；我知晓，一旦签署，此协议将生效，也知晓本协议同样有效于我的继承人、近亲、执行人、管理人、个人代表和转让人。</span>
</p>

</pre>`
        return {__html: _str}
    }
    render () {
        return <div className="terms-warp">
            <h1>报名条款</h1>
            <div className="terms-detail">
                <div dangerouslySetInnerHTML={this.createMarkup()}/>
            </div>
            <div className="footer">
                <Link to="/apply" >我同意报名条款</Link>
            </div>
        </div>
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        publicInfo: state.publicInfo
    }
}

export default connect(mapStateToProps)(Terms)
