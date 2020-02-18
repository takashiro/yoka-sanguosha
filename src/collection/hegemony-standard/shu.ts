import {
	General,
	Gender,
	Kingdom,
} from '@karuta/sanguosha-core';

const generals: General[] = [];

const LiuBei = new General('liubei', Kingdom.Shu, 4, Gender.Male);
generals.push(LiuBei);

const GanFuren = new General('ganfuren', Kingdom.Shu, 3, Gender.Female);
generals.push(GanFuren);

const ZhugeLiang = new General('zhugeliang', Kingdom.Shu, 3, Gender.Male);
generals.push(ZhugeLiang);

const HuangYueying = new General('huangyueying', Kingdom.Shu, 3, Gender.Female);
generals.push(HuangYueying);

const Wolong = new General('wolong', Kingdom.Shu, 3, Gender.Male);
generals.push(Wolong);

const PangTong = new General('pangtong', Kingdom.Shu, 3, Gender.Male);
generals.push(PangTong);

const GuanYu = new General('guanyu', Kingdom.Shu, 4, Gender.Male);
generals.push(GuanYu);

const ZhangFei = new General('zhangfei', Kingdom.Shu, 4, Gender.Male);
generals.push(ZhangFei);

const ZhaoYun = new General('zhaoyun', Kingdom.Shu, 4, Gender.Male);
generals.push(ZhaoYun);

const MaChao = new General('machao', Kingdom.Shu, 4, Gender.Male);
generals.push(MaChao);

const HuangZhong = new General('huangzhong', Kingdom.Shu, 4, Gender.Male);
generals.push(HuangZhong);

const WeiYan = new General('weiyan', Kingdom.Shu, 4, Gender.Male);
generals.push(WeiYan);

const LiuShan = new General('liushan', Kingdom.Shu, 3, Gender.Male);
generals.push(LiuShan);

const MengHuo = new General('menghuo', Kingdom.Shu, 4, Gender.Male);
generals.push(MengHuo);

const ZhuRong = new General('zhurong', Kingdom.Shu, 4, Gender.Female);
generals.push(ZhuRong);

export default generals;
