import React, { useState } from 'react';
import {
  Sun,
  BatteryCharging,
  TrendingUp,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Building,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';
import { AssessmentResult, SolarAssessmentInput } from '../types';

interface SolarReadinessProps {
  onRequestAudit: (data: SolarAssessmentInput, result: AssessmentResult) => void;
  compact?: boolean;
}

export const SolarReadinessAssessment: React.FC<SolarReadinessProps> = ({
  onRequestAudit,
  compact = false
}) => {
  const [inputs, setInputs] = useState<SolarAssessmentInput>({
    institutionName: '',
    contactPerson: '',
    email: '',
    phone: '',
    location: 'Kampala, Uganda',
    facilityType: 'University / Higher Institution',
    monthlyGridBillUGX: 18000000, // Default ~18M UGX (~$4,800)
    monthlyGeneratorFuelUGX: 8000000, // Default ~8M UGX (~$2,100)
    averageOutageHoursDaily: 3,
    primaryEnergyGoal: 'cost-reduction',
    hasExistingGenerator: true,
    generatorKVA: 150
  });

  // Calculate recommendation metrics based on inputs
  const calculateResult = (): AssessmentResult => {
    const totalMonthlyEnergySpendUGX = inputs.monthlyGridBillUGX + inputs.monthlyGeneratorFuelUGX;
    const annualEnergySpendUGX = totalMonthlyEnergySpendUGX * 12;

    // Estimate total required daily solar generation in kWh based on grid spend
    // UGX 1,000 per kWh approximate blended institutional tariff in Uganda
    const estimatedMonthlyKWh = inputs.monthlyGridBillUGX / 920; 
    const dailyKWhNeed = estimatedMonthlyKWh / 30;

    // Peak sun hours in Uganda ~ 5.2 hours/day
    const rawSolarKWp = (dailyKWhNeed * 0.70) / 5.2; // Design solar to cover 70% of day load
    const recommendedSolarKW = Math.max(15, Math.round(rawSolarKWp / 5) * 5); // round to nearest 5 kW

    // Battery storage: cover outage hours + night essential loads
    const batteryMultiplier = Math.max(2, inputs.averageOutageHoursDaily);
    const rawBatteryKWh = (dailyKWhNeed / 24) * batteryMultiplier * 1.3; // 30% DOD margin
    const recommendedBatteryKWh = Math.max(30, Math.round(rawBatteryKWh / 10) * 10);

    // Annual savings estimation: ~75% grid reduction + ~80% generator fuel displacement
    const estimatedAnnualSavingsUGX = Math.round((inputs.monthlyGridBillUGX * 0.75 + inputs.monthlyGeneratorFuelUGX * 0.85) * 12);
    
    // Estimated turnkey system capital investment (UGX ~ 3.8M per kWp solar + storage)
    const estimatedCapExUGX = (recommendedSolarKW * 3200000) + (recommendedBatteryKWh * 1800000);
    const estimatedPaybackYears = Math.max(2.1, Number((estimatedCapExUGX / estimatedAnnualSavingsUGX).toFixed(1)));

    // CO2 Offset: ~0.75 kg CO2 per kWh solar generated
    const annualSolarKWhGenerated = recommendedSolarKW * 5.2 * 365;
    const co2OffsetTonsPerYear = Math.round((annualSolarKWhGenerated * 0.75) / 1000);

    // Score
    let score = 82;
    if (inputs.monthlyGeneratorFuelUGX > 5000000) score += 10;
    if (inputs.averageOutageHoursDaily >= 2) score += 6;
    score = Math.min(98, score);

    let readinessCategory: AssessmentResult['readinessCategory'] = 'Optimal Hybrid Candidate';
    if (score > 90) readinessCategory = 'High Solar Potential';
    if (inputs.monthlyGridBillUGX > 50000000) readinessCategory = 'Custom Infrastructure Upgrade Needed';

    return {
      recommendedSolarKW,
      recommendedBatteryKWh,
      estimatedAnnualSavingsUGX,
      estimatedPaybackYears,
      co2OffsetTonsPerYear,
      feasibilityScore: score,
      readinessCategory
    };
  };

  const result = calculateResult();

  const handleAuditClick = () => {
    onRequestAudit(inputs, result);
  };

  const formatUGX = (val: number) => {
    if (val >= 1000000000) return `UGX ${(val / 1000000000).toFixed(2)} Billion`;
    if (val >= 1000000) return `UGX ${(val / 1000000).toFixed(1)} Million`;
    return `UGX ${val.toLocaleString()}`;
  };

  const formatUSD = (valUGX: number) => {
    const usd = Math.round(valUGX / 3720); // UGX to USD rate
    return `$${usd.toLocaleString()}`;
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
      {/* Banner Top */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-slate-950/40 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-200 mb-2 border border-amber-400/30">
            <Sun className="w-3.5 h-3.5 text-amber-300" />
            AD IMPERIUM SOLARIS DIVISION
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Is Your Institution Solar Ready?
          </h3>
          <p className="text-amber-100 text-sm md:text-base mt-1 max-w-2xl">
            Evaluate your solar energy potential, generator fuel displacement, and projected ROI in under 60 seconds with Genivert’s institutional engineering model.
          </p>
        </div>

        <div className="bg-slate-950/60 rounded-xl p-3 border border-amber-300/30 text-center shrink-0 min-w-[140px]">
          <span className="text-xs uppercase text-amber-300 font-semibold tracking-wider block">Solar Readiness</span>
          <span className="text-3xl font-black text-amber-400">{result.feasibilityScore}%</span>
          <span className="text-[11px] text-amber-200 block font-medium mt-0.5">High Potential</span>
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs Column */}
        <div className="lg:col-span-6 space-y-5">
          <h4 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-2">
            <Building className="w-5 h-5 text-blue-400" />
            Facility Energy Profile
          </h4>

          {/* Facility Type Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
              Institution Type
            </label>
            <select
              value={inputs.facilityType}
              onChange={(e) => setInputs({ ...inputs, facilityType: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
            >
              <option value="University / Higher Institution">University / Academic Campus</option>
              <option value="Secondary / Boarding School">Secondary / Boarding School</option>
              <option value="Referral Hospital / Surgical Center">Referral Hospital / Clinic</option>
              <option value="Hotel / Safari Lodge / Resort">Hotel / Safari Lodge / Resort</option>
              <option value="Bank HQ / Regional Data Center">Bank HQ / Data Center</option>
              <option value="Religious Seminary / Cathedral">Religious Seminary / Cathedral Complex</option>
              <option value="Manufacturing / Processing Facility">Industrial Processing Facility</option>
              <option value="Commercial Plaza / Office Building">Commercial Plaza / Office Complex</option>
            </select>
          </div>

          {/* Grid Bill Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Monthly Utility Electricity Spend (Umeme/Grid)
              </label>
              <span className="text-sm font-bold text-amber-400">
                {formatUGX(inputs.monthlyGridBillUGX)} (~{formatUSD(inputs.monthlyGridBillUGX)})
              </span>
            </div>
            <input
              type="range"
              min="2000000"
              max="150000000"
              step="1000000"
              value={inputs.monthlyGridBillUGX}
              onChange={(e) => setInputs({ ...inputs, monthlyGridBillUGX: Number(e.target.value) })}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>2M UGX</span>
              <span>50M UGX</span>
              <span>150M+ UGX</span>
            </div>
          </div>

          {/* Generator Fuel Spend Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Monthly Diesel Generator Fuel Cost
              </label>
              <span className="text-sm font-bold text-orange-400">
                {formatUGX(inputs.monthlyGeneratorFuelUGX)} (~{formatUSD(inputs.monthlyGeneratorFuelUGX)})
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="80000000"
              step="500000"
              value={inputs.monthlyGeneratorFuelUGX}
              onChange={(e) => setInputs({ ...inputs, monthlyGeneratorFuelUGX: Number(e.target.value) })}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>0 UGX (No Gen)</span>
              <span>20M UGX</span>
              <span>80M+ UGX</span>
            </div>
          </div>

          {/* Outage hours */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Daily Grid Outage Hours
              </label>
              <select
                value={inputs.averageOutageHoursDaily}
                onChange={(e) => setInputs({ ...inputs, averageOutageHoursDaily: Number(e.target.value) })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
              >
                <option value={1}>1 - 2 Hours / day</option>
                <option value={3}>3 - 5 Hours / day</option>
                <option value={6}>6 - 10 Hours / day</option>
                <option value={12}>12+ Hours (Off-Grid / Remote)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Primary Goal
              </label>
              <select
                value={inputs.primaryEnergyGoal}
                onChange={(e) => setInputs({ ...inputs, primaryEnergyGoal: e.target.value as any })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium"
              >
                <option value="cost-reduction">Cut Electricity Bills</option>
                <option value="zero-outage">100% Uninterrupted Power</option>
                <option value="sustainability">Carbon Reduction / ESG</option>
                <option value="all">All Objectives Combined</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right Output Results Column */}
        <div className="lg:col-span-6 bg-slate-950/80 rounded-xl p-6 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
              <span className="text-xs font-bold uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-amber-400" />
                Institutional Engineering Projection
              </span>
              <span className="text-xs px-2.5 py-1 bg-amber-500/10 text-amber-300 rounded border border-amber-500/30 font-semibold">
                {result.readinessCategory}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Recommended Solar */}
              <div className="bg-slate-900/90 p-4 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                  <Sun className="w-4 h-4 text-amber-400" />
                  Recommended Solar PV
                </div>
                <div className="text-2xl font-black text-white">{result.recommendedSolarKW} <span className="text-sm font-semibold text-amber-400">kWp</span></div>
                <p className="text-[11px] text-slate-400 mt-1">Tier-1 N-Type TOPCon Panels</p>
              </div>

              {/* Recommended Storage */}
              <div className="bg-slate-900/90 p-4 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                  <BatteryCharging className="w-4 h-4 text-emerald-400" />
                  Battery Storage
                </div>
                <div className="text-2xl font-black text-white">{result.recommendedBatteryKWh} <span className="text-sm font-semibold text-emerald-400">kWh</span></div>
                <p className="text-[11px] text-slate-400 mt-1">Industrial LiFePO4 Rack</p>
              </div>

              {/* Annual Savings */}
              <div className="bg-slate-900/90 p-4 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                  Est. Annual Savings
                </div>
                <div className="text-lg font-black text-emerald-400">
                  {formatUGX(result.estimatedAnnualSavingsUGX)}
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  (~{formatUSD(result.estimatedAnnualSavingsUGX)} / year)
                </p>
              </div>

              {/* Payback Horizon */}
              <div className="bg-slate-900/90 p-4 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1">
                  <DollarSign className="w-4 h-4 text-amber-400" />
                  Projected Payback
                </div>
                <div className="text-2xl font-black text-amber-300">
                  {result.estimatedPaybackYears} <span className="text-sm font-medium text-slate-300">Years</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">25-year panel lifetime ROI</p>
              </div>
            </div>

            <div className="bg-blue-950/40 p-3.5 rounded-lg border border-blue-800/40 text-xs text-blue-200 flex items-start gap-2.5 mb-6">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-white">Full Generator Integration Included:</strong> Genivert Systems synchronizes solar with your existing generator to run zero-load or autostop when solar/battery meets demand.
              </div>
            </div>
          </div>

          <button
            onClick={handleAuditClick}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-slate-950 font-black py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base group cursor-pointer"
          >
            <span>Request Full On-Site Solar Assessment</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
